---
trigger: always_on
description: Regras mandatórias de SEO orgânico (técnico, local e de conteúdo) alinhadas às diretrizes do Google Search Essentials.
---

# Regras de SEO Orgânico (sem tráfego pago)

## 1. SEO Técnico
1. Toda página indexável tem: `<title>` único (≤ 60 caracteres), `meta description` única (70–160), `link rel="canonical"` absoluto, exatamente **um `<h1>`**, hierarquia de headings sem saltos, `lang="pt-BR"`.
2. `robots.txt` e `sitemap.xml` válidos e coerentes com as rotas pré-renderizadas.
3. Conteúdo principal presente no HTML pré-renderizado (verificável por `npm run seo:audit`).
4. URLs limpas, em minúsculas, com hífen, sem fragmentos (`#`) como página.
5. Página 404 com `noindex`.

## 2. Dados Estruturados (Schema.org / JSON-LD)
1. Tipo principal: `HVACBusiness` (subtipo de `LocalBusiness`) com NAP idêntico ao exibido na página.
2. Permitidos: `Service`, `FAQPage` (somente se as perguntas estiverem visíveis na página), `BreadcrumbList`, `WebSite`.
3. **Proibido** `aggregateRating`/`review` autodeclarados no próprio `LocalBusiness` (política de avaliações autopromocionais do Google).
4. JSON-LD deve ser JSON válido (verificado pelo `seo:audit`).

## 3. SEO Local
1. NAP consistente em todo o site (fonte única `business-info.ts`).
2. Páginas de área atendida apenas com conteúdo genuinamente útil e diferenciado; proibido gerar páginas-porta (doorway) com troca apenas do nome da cidade.
3. Mapa/rota e link para o Perfil da Empresa no Google quando disponível.

## 4. Conteúdo
1. Uma intenção de busca principal por página, com palavras-chave mapeadas em `docs/product/keyword-map.md`.
2. Proibido keyword stuffing, texto oculto ou cloaking.
3. Fatos verificáveis apenas (anos de mercado, certificações e números somente se confirmados em `docs/product/open-questions.md`).

## 5. Performance (Core Web Vitals)
1. Imagens servidas em WebP com dimensões explícitas; nenhuma imagem servida > 300 kB.
2. Fontes self-hosted com `font-display: swap`.
3. LCP da home sem dependência de JavaScript para exibir texto.
