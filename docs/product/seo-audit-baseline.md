# Auditoria Baseline de SEO e Diagnóstico Técnico

> Data da Auditoria: 2026-11-06  
> Escopo: Repositório `cli_ar_homepage` (Angular 19 SSR / Prerender)  
> Status: Crítico — Múltiplos bloqueadores graves de indexação identificados

---

## 1. Sumário Executivo
A auditoria técnica inicial revelou que, apesar de o projeto contar com `@angular/ssr` e `prerender: true` configurados no `angular.json`, **o site atual entrega para os motores de busca um HTML praticamente em branco** contendo apenas um componente de loading (`ngx-spinner`). Além disso, foram encontradas violações graves das diretrizes do Google Search Essentials (avaliações autodeclaradas em schema), ausência de tags canônicas, imagens sem compressão que totalizam quase 30 MB, e anulação do sistema de roteamento do Angular.

---

## 2. Diagnóstico Detalhado por Camada

### 2.1. Bloqueio Fatal de SSR e Prerender (HTML Vazio para o Googlebot)
- **Localização:** `src/app/app.component.ts` (linhas 45–77) e `src/app/app.component.html` (linhas 1–31).
- **Problema:**  
  O componente raiz inicializa `isLoading = true` e encapsula todo o corpo da página dentro de `<div *ngIf="!isLoading">`.
  A mudança de estado ocorre exclusivamente no método `ngAfterViewInit` protegido pela verificação `if (isPlatformBrowser(this.platformId))` com um atraso forçado de `setTimeout(..., 2000)`.
- **Impacto em SEO:**  
  Durante a compilação do prerender (SSR no Node.js via `@angular/ssr`), o código executa em ambiente servidor (`isPlatformBrowser` é falso). O `setTimeout` jamais dispara no servidor. Consequentemente, o HTML estático gerado para o Googlebot contém apenas a tag `<ngx-spinner>` e **nenhum texto, nenhum heading (`<h1>`), nenhum link e nenhum parágrafo**. O site é praticamente invisível para indexação orgânica.

### 2.2. Arquitetura de Roteamento Quebrada e Páginas Órfãs
- **Localização:** `src/app/app.component.html` e `src/app/app.routes.ts`.
- **Problema:**  
  1. `app.component.html` não possui `<router-outlet></router-outlet>`. Ele renderiza estaticamente `<app-home>`, `<app-arcondicionado>`, `<app-servicos>`, `<app-sobre>` e `<app-contato>` empilhados na mesma página através de seções com `id`.
  2. As rotas declaradas em `app.routes.ts` (`/servicos`, `/sobre`, `/contato`) são inertes para a navegação real do usuário.
  3. A rota dedicada de ar-condicionado (`/arcondicionado`) sequer existe em `app.routes.ts`, tornando o componente `ArcondicionadoComponent` órfão de indexação independente.
- **Impacto em SEO:**  
  O site comporta-se como uma One-Page disfarçada, impedindo a criação de URLs indexáveis específicas para serviços distintos (ex: `/ar-condicionado/instalacao`, `/refrigeracao/geladeiras-freezers`), o que dilui completamente a relevância para palavras-chave de cauda longa e intenções transacionais.

### 2.3. Meta Tags, Canonical e Cabeçalhos HTML
- **Localização:** `src/index.html`.
- **Problema:**  
  1. **`<title>`:** Possui 104 caracteres (*"Alves Refrigeração | Assistência Técnica em Ar-Condicionado, Geladeiras e Refrigeração em Nova Lima - MG"*), excedendo drasticamente a recomendação máxima de 60 caracteres e sofrendo truncamento no SERP.
  2. **Canonical Tag:** Ausente. Não existe `<link rel="canonical" href="...">`, gerando risco de conteúdo duplicado entre variações de protocolo (http/https), www/não-www e rotas.
  3. **Meta Keywords:** Tag obsoleta (`<meta name="keywords" content="...">`) presente com repetição artificial de termos. O Google desconsidera essa tag desde 2009.
  4. **Open Graph Image:** Declara caminho relativo (`/assets/img/logo/Alves_Refrigeracao_log.png`), violando o padrão Open Graph que exige URL canônica absoluta (`https://...`).
  5. **Atributo de Idioma:** Está definido como `lang="pt-br"` (recomendado pelas diretrizes W3C/SEO: `lang="pt-BR"`).
  6. **Hierarquia de Headings:** Pelo empilhamento de componentes no mesmo template raiz, há múltiplos `<h1>` competindo na mesma renderização (`<h1>` na Home e `<h1>` em Contato), sem unicidade de tema principal.

### 2.4. Dados Estruturados Schema.org (Risco de Penalidade Manual)
- **Localização:** `src/index.html` (linhas 26–74).
- **Problema:**  
  1. Declaração de `@type: "LocalBusiness"` em vez do tipo estritamente especializado `HVACBusiness`.
  2. **Violação Mandatória:** Inclusão de `"aggregateRating": { "ratingValue": "5", "reviewCount": "47" }` diretamente no JSON-LD autodeclarado do negócio.
  3. **Risco:** As diretrizes de dados estruturados do Google proíbem expressamente avaliações autodeclaradas (self-serving reviews) para o tipo `LocalBusiness` e seus subtipos. Sites que utilizam essa prática recebem notificação de ação manual no Google Search Console e têm seus rich snippets sumariamente removidos.
  4. **Estatismo:** O script JSON-LD está estático no `index.html` da aplicação, não se adaptando dinamicamente às rotas ou aos serviços específicos visitados.

### 2.5. Imagens e Core Web Vitals (LCP Crítico)
- **Localização:** `src/assets/img/`.
- **Problema:**  
  Foram identificados arquivos de imagem brutos e desproporcionais carregados diretamente na interface:
  - `ConcertoGeladeira.png`: **8,87 MB**
  - `ConcertoArcond.png`: **8,04 MB**
  - `ConcertoBebedouro.png`: **7,47 MB**
  - `troca-placa.png`: **2,72 MB**
  - `capa_site.jpg`: **1,20 MB**
  - Total de ativos pesados: **> 28 MB**.
  - Além do peso, os arquivos utilizam nomenclatura com erro ortográfico (`Concerto` com C em vez de `Conserto` com S).
  - Nenhuma imagem utiliza formato moderno WebP ou AVIF.
  - Imagens no template HTML não possuem atributos explícitos de dimensão (`width` e `height`), provocando Content Layout Shift (CLS).
- **Impacto:** O tempo de carregamento em redes móveis 3G/4G e a métrica de LCP (Largest Contentful Paint) no mobile são severamente comprometidos, rebaixando a pontuação do site nos fatores de ranqueamento do Google PageSpeed.

### 2.6. Carregamento de Fontes Externas e Bloqueio de Renderização
- **Localização:** `src/index.html` (linhas 78–79) e `package.json`.
- **Problema:**  
  O arquivo `index.html` realiza chamadas externas bloqueantes para `fonts.googleapis.com` solicitando as fontes `Poppins` e `Inter` em múltiplos pesos.
  Entretanto, os pacotes `@fontsource/poppins` e `@fontsource/inter` já estão instalados no `package.json`.
- **Impacto:** Conexão externa adicional (DNS lookup + SSL handshake + download de CSS/Woff2) que posterga a renderização do texto na primeira dobra (First Contentful Paint).

### 2.7. Inconsistência de Informações Cadastrais (NAP e Prova Social)
- **Endereço e Bairro:** O `index.html` e a SPEC apontam `Rua Professora Anésia de Matos Guimarães, 80 B - CEP 34002-184`, mas em `contato.component.html` o bairro é citado como "Vila São Luís" enquanto o embed do mapa aponta "Vila Padre Valeriano".
- **E-mail de Contato:** Em `contato.component.html` (linha 78), o texto exibe `contato.com`, endereço inválido que não corresponde ao e-mail oficial `alvesrefrigeracaomg@gmail.com`.
- **Tempo de Atuação:** `sobre.component.html` cita *"Há mais de 10 anos"*, enquanto `sobre.component.ts` define no array de estatísticas `"2+ Anos de experiência"`.
- **Métricas de Avaliação:** `sobre.component.html` exibe `+38 avaliações`, enquanto o JSON-LD em `index.html` exibe `reviewCount: "47"` e a home cita `5.0 Google`.
- **Impacto em SEO:** Inconsistências de NAP e de dados institucionais prejudicam os sinais de E-E-A-T e a validação cruzada realizada pelos algoritmos de SEO Local do Google.

### 2.8. Formulário de Contato Desconectado
- **Localização:** `src/app/pages/contato/contato.component.ts`.
- **Problema:** O formulário simula envio ou tenta requisição HTTP sem endpoint de backend funcional (que está expressamente fora do escopo do projeto).
- **Impacto na Conversão:** Usuários que preenchem formulários não atendidos deixam de fazer contato direto via WhatsApp ou ligação telefônica, gerando perda imediata de leads.

---

## 3. Matriz de Severidade dos Problemas

| Item | Severidade | Categoria | Ação Necessária |
| :--- | :--- | :--- | :--- |
| **Prerender bloqueado por spinner** | `CRÍTICA` | SEO Técnico / SSR | Eliminar `*ngIf="!isLoading"` no HTML raiz; carregar conteúdo diretamente no SSR |
| **Schema aggregateRating autodeclarado** | `CRÍTICA` | SEO / Penalidade | Remover imediatamente `aggregateRating` do JSON-LD; adotar `HVACBusiness` puro |
| **Arquitetura sem router-outlet** | `ALTA` | Arquitetura / SEO | Implementar `<router-outlet>` e configurar rotas individuais com URLs limpas |
| **Imagens de 28 MB sem otimização** | `ALTA` | Core Web Vitals | Converter imagens para WebP, redimensionar, limitar a < 300 kB e corrigir nomes |
| **Title > 100 caracteres e sem Canonical** | `ALTA` | SEO On-page | Implementar serviço dinâmico de Meta/Title (≤ 60 chars) e canonical absoluto |
| **Fontes externas bloqueando FCP** | `MÉDIA` | Performance | Utilizar `@fontsource` self-hosted com `font-display: swap` |
| **Discrepâncias de NAP e claims** | `MÉDIA` | E-E-A-T / SEO Local | Centralizar NAP em arquivo único (`business-info.ts`) e unificar dados |
| **Formulário sem backend** | `MÉDIA` | Conversão / UX | Redirecionar ação principal para WhatsApp com mensagem pré-formatada |
