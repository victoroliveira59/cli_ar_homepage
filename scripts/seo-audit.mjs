import fs from 'node:fs';
import path from 'node:path';

const DIST_DIR = path.resolve(process.cwd(), 'dist/cli_ar/browser');

console.log('========================================');
console.log('🔍 INICIANDO AUDITORIA DE SEO TÉCNICO');
console.log('========================================');
console.log(`Diretório alvo: ${DIST_DIR}\n`);

if (!fs.existsSync(DIST_DIR)) {
  console.error(`❌ ERRO CRÍTICO: Diretório de distribuição não encontrado: ${DIST_DIR}`);
  console.error('Execute `npm run build` antes de rodar o seo:audit.');
  process.exit(1);
}

function findHtmlFiles(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(findHtmlFiles(fullPath));
    } else if (entry.isFile() && entry.name.toLowerCase() === 'index.html') {
      results.push(fullPath);
    }
  }

  return results;
}

const htmlFiles = findHtmlFiles(DIST_DIR);

if (htmlFiles.length === 0) {
  console.error(`❌ ERRO CRÍTICO: Nenhum arquivo index.html encontrado em ${DIST_DIR}.`);
  process.exit(1);
}

console.log(`Encontradas ${htmlFiles.length} páginas pré-renderizadas para auditoria.\n`);

let totalErrors = 0;
let totalWarnings = 0;

// Validação de robots.txt
console.log('🤖 Auditando robots.txt');
const robotsPath = path.join(DIST_DIR, 'robots.txt');
if (!fs.existsSync(robotsPath)) {
  console.error(`  ❌ [ERRO] robots.txt ausente em ${DIST_DIR}`);
  totalErrors++;
} else {
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  if (!robotsContent.includes('User-agent:') || !robotsContent.includes('Sitemap:')) {
    console.error(`  ❌ [ERRO] robots.txt inválido ou sem declaração de Sitemap/User-agent.`);
    totalErrors++;
  } else {
    console.log(`  ✅ robots.txt presente e válido com apontamento de Sitemap.`);
  }
}
console.log('');

// Validação de sitemap.xml
console.log('🗺️  Auditando sitemap.xml');
const sitemapPath = path.join(DIST_DIR, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  console.error(`  ❌ [ERRO] sitemap.xml ausente em ${DIST_DIR}`);
  totalErrors++;
} else {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  if (!sitemapContent.includes('<urlset') || !sitemapContent.includes('<loc>')) {
    console.error(`  ❌ [ERRO] sitemap.xml malformado ou sem tags <urlset>/<loc>.`);
    totalErrors++;
  } else {
    const locMatches = sitemapContent.match(/<loc>/g) || [];
    console.log(`  ✅ sitemap.xml presente e válido com ${locMatches.length} URLs mapeadas.`);
  }
}
console.log('');

for (const filePath of htmlFiles) {
  const relativePath = path.relative(process.cwd(), filePath).replace(/\\/g, '/');
  console.log(`📄 Auditando: ${relativePath}`);
  const html = fs.readFileSync(filePath, 'utf8');

  // 1. Validação de <title>
  const titleMatch = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    console.error(`  ❌ [ERRO] Tag <title> ausente ou vazia.`);
    totalErrors++;
  } else {
    const titleText = titleMatch[1].trim();
    console.log(`  ✅ <title>: "${titleText.substring(0, 60)}${titleText.length > 60 ? '...' : ''}" (${titleText.length} carac.)`);
  }

  // 2. Validação de <meta name="description">
  const metaDescMatch = html.match(/<meta\s+[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i)
    || html.match(/<meta\s+[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i);

  if (!metaDescMatch || !metaDescMatch[1].trim()) {
    console.error(`  ❌ [ERRO] Tag <meta name="description"> ausente ou com content vazio.`);
    totalErrors++;
  } else {
    const descText = metaDescMatch[1].trim();
    console.log(`  ✅ <meta description>: "${descText.substring(0, 60)}..." (${descText.length} carac.)`);
  }

  // 3. Validação de <link rel="canonical">
  const canonicalMatch = html.match(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*>/i)
    || html.match(/<link\s+[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["'][^>]*>/i);

  if (!canonicalMatch || !canonicalMatch[1].trim()) {
    console.warn(`  ⚠️  [ALERTA] Link canônico <link rel="canonical"> não encontrado.`);
    totalWarnings++;
  } else {
    console.log(`  ✅ <link canonical>: "${canonicalMatch[1].trim()}"`);
  }

  // 4. Validação de <h1>
  const h1Matches = html.match(/<h1\b[^>]*>[\s\S]*?<\/h1>/gi);
  if (!h1Matches || h1Matches.length === 0) {
    console.warn(`  ⚠️  [ALERTA] Nenhuma tag <h1> encontrada.`);
    totalWarnings++;
  } else if (h1Matches.length > 1) {
    console.warn(`  ⚠️  [ALERTA] Múltiplas tags <h1> encontradas (${h1Matches.length} ocorrências).`);
    totalWarnings++;
  } else {
    console.log(`  ✅ <h1> único encontrado`);
  }

  // 5. Validação de blocos JSON-LD
  const jsonLdRegex = /<script\s+[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let jsonLdMatch;
  let jsonLdCount = 0;

  while ((jsonLdMatch = jsonLdRegex.exec(html)) !== null) {
    jsonLdCount++;
    const rawJson = jsonLdMatch[1].trim();
    try {
      const parsed = JSON.parse(rawJson);
      const type = parsed['@type'] || (Array.isArray(parsed['@graph']) ? 'Graph' : 'Desconhecido');
      console.log(`  ✅ JSON-LD bloco #${jsonLdCount}: Válido (@type: ${JSON.stringify(type)})`);
    } catch (err) {
      console.error(`  ❌ [ERRO] JSON-LD bloco #${jsonLdCount} contém JSON inválido/malformado: ${err.message}`);
      totalErrors++;
    }
  }

  if (jsonLdCount === 0) {
    console.warn(`  ⚠️  [ALERTA] Nenhum bloco JSON-LD encontrado nesta página.`);
    totalWarnings++;
  }

  console.log('');
}

console.log('========================================');
console.log('📊 RESUMO DA AUDITORIA DE SEO');
console.log('========================================');
console.log(`Páginas auditadas : ${htmlFiles.length}`);
console.log(`Total de Erros    : ${totalErrors}`);
console.log(`Total de Alertas  : ${totalWarnings}`);
console.log('========================================\n');

if (totalErrors > 0) {
  console.error(`❌ AUDITORIA FALHOU: ${totalErrors} erro(s) impeditivo(s) encontrado(s).\n`);
  process.exit(1);
} else {
  console.log(`✅ AUDITORIA APROVADA: Todos os requisitos críticos de SEO técnico foram atendidos!\n`);
  process.exit(0);
}
