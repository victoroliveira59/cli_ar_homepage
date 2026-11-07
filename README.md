# Alves Refrigeração & Climatização — Homepage Angular 19 SSR

> Homepage e Hub de Climatização e Refrigeração com máxima otimização para SEO Local orgânico em Nova Lima/MG e Região Metropolitana de Belo Horizonte.

[![Angular 19](https://img.shields.io/badge/Angular-19.1-red.svg)](https://angular.dev/)
[![SSR & Prerender](https://img.shields.io/badge/SSR-Prerender%20Built--in-blue.svg)](https://angular.dev/guide/ssr)
[![SEO White-Hat](https://img.shields.io/badge/SEO-100%25%20White--Hat-brightgreen.svg)](docs/product/content-rules.md)
[![Core Web Vitals](https://img.shields.io/badge/CWV-Optimized%20WebP-green.svg)](docs/product/requirements.md)
[![AI Agent Harness](https://img.shields.io/badge/Governance-AI%20Agent%20Harness-purple.svg)](AGENTS.md)

---

## 1. Visão do Projeto
O projeto **cli_ar_homepage** é a aplicação web oficial da **Alves Refrigeração**, empresa especializada em serviços de climatização (instalação, manutenção, recarga de gás e higienização de ar-condicionado) e refrigeração (conserto de geladeiras, freezers, chopeiras e bebedouros).

Construído sob uma abordagem **100% orgânica (zero dependência de tráfego pago)**, o site foi projetado para atingir o topo dos resultados de busca do Google e do Google Maps (Local Pack) para Nova Lima, condomínios fechados (Alphaville, Vila da Serra, Vale do Sereno) e cidades vizinhas (Raposos, Rio Acima e Grande BH).

---

## 2. Tecnologias Utilizadas

- **Framework Web:** [Angular 19](https://angular.dev/) (Standalone Components, Signals, Router com `<router-outlet>`).
- **Renderização e SSR:** `@angular/ssr` com Prerender estático e servidor Express para execução em Node.js.
- **Linguagem:** TypeScript 5.7.
- **Estilização e UI:** Bootstrap 4, CSS moderno com variáveis nativas, Font Awesome 6.
- **Tipografia Self-Hosted:** `@fontsource/inter` e `@fontsource/poppins` com `font-display: swap` (elimina requisições síncronas ao Google Fonts).
- **Otimização de Mídia:** Formato moderno WebP com dimensões explícitas e limites < 300 kB por imagem.
- **Testes Automatizados:** Jasmine e Karma.
- **Governança Multiagente:** AI Agent Harness com papéis especializados (Maestro, Analista, Engenheiro, Tester, Revisor).

---

## 3. Arquitetura de Informação e Rotas Indexáveis

Ao contrário de One-Pages tradicionais empilhadas, a aplicação implementa rotas indexáveis individuais, permitindo que cada serviço possua seu próprio `<title>`, `<meta description>`, tag canônica e dados estruturados Schema.org:

| Rota Canônica | Descrição do Serviço / Finalidade | Schema.org Primário |
| :--- | :--- | :--- |
| `/` | Homepage, hub principal de autoridade e prova social | `HVACBusiness`, `LocalBusiness` |
| `/ar-condicionado` | Hub de climatização residencial e comercial | `HVACBusiness`, `Service` |
| `/ar-condicionado/instalacao` | Instalação técnica de splits, multi-splits e cassetes | `Service`, `BreadcrumbList` |
| `/ar-condicionado/manutencao-limpeza` | Manutenção preventiva, recarga de gás e higienização | `Service`, `BreadcrumbList` |
| `/refrigeracao` | Hub de refrigeração doméstica e comercial | `HVACBusiness`, `Service` |
| `/refrigeracao/geladeiras-freezers` | Conserto urgente de geladeiras frost-free e freezers | `Service`, `BreadcrumbList` |
| `/refrigeracao/chopeiras-bebedouros` | Manutenção de chopeiras de bares e bebedouros industriais | `Service`, `BreadcrumbList` |
| `/areas-atendidas` | Guia de cobertura geográfica e condomínios de Nova Lima | `BreadcrumbList` |
| `/sobre` | História, qualificações técnicas, compromisso e garantia | `AboutPage`, `BreadcrumbList` |
| `/contato` | Canais diretos de atendimento, mapa interativo e WhatsApp | `ContactPage` |
| `/perguntas-frequentes` | FAQ estruturado sobre preços, garantia e atendimento | `FAQPage` |

---

## 4. Diferenciais Técnicos de SEO e Performance (Core Web Vitals)

1. **HTML Pré-Renderizado sem Bloqueio de Spinner:** Todo o conteúdo textual, títulos semânticos (`<h1>` a `<h3>`) e links estão presentes no HTML inicial gerado pelo build (`prerender: true`), permitindo indexação imediata pelo Googlebot.
2. **Dados Estruturados Válidos (Schema.org):** Implementação do tipo `HVACBusiness` sincronizado com os dados oficiais, **sem avaliações autodeclaradas** (eliminando risco de penalidade manual pelas políticas do Google).
3. **Imagens Leves em WebP:** Todos os ativos pesados legados (que chegavam a quase 9 MB) foram convertidos para WebP de alta fidelidade (< 300 kB) com atributos de `width` e `height` para evitar mudanças de layout (CLS < 0,1).
4. **NAP Centralizado:** Todas as páginas consomem a fonte única de dados em `src/app/core/business-info.ts`, garantindo consistência absoluta de endereço, telefone e horários.
5. **Auditoria de SEO Automatizada no Pipeline:** O projeto conta com script customizado (`npm run seo:audit`) que valida no build a integridade de títulos, meta descriptions, headings, canonicals, JSON-LD, imagens e sitemaps.

---

## 5. Como Executar o Projeto

### Pré-requisitos
- Node.js versão 18 ou 20 LTS
- NPM versão 9 ou superior

### Instalação de Dependências
```bash
npm install
```

### Servidor de Desenvolvimento
Inicia a aplicação localmente com recarregamento automático:
```bash
npm start
# ou: npx ng serve
```
Acesse `http://localhost:4200` no seu navegador.

### Compilação de Produção (com SSR e Prerender)
Gera os arquivos estáticos pré-renderizados no diretório `dist/cli_ar/browser`:
```bash
npm run build
```

### Execução da Auditoria Automatizada de SEO
Valida o HTML gerado pelo build em conformidade com as regras de SEO técnico e Core Web Vitals:
```bash
npm run seo:audit
```

### Execução dos Testes Automatizados
Executa a suíte de testes unitários com Karma/Jasmine:
```bash
npm test
```

### Servidor SSR em Produção
Para rodar o servidor SSR com Express em ambiente de produção:
```bash
node dist/cli_ar/server/server.mjs
```

---

## 6. Dados Cadastrais Oficiais da Empresa (NAP)

- **Razão Social / Nome:** Alves Refrigeração - Assistência Técnica Especializada
- **CNPJ:** `62.273.642/0001-11`
- **Endereço Sede:** Rua Professora Anésia de Matos Guimarães, 80 B — Bairro Vila Padre Valeriano
- **Município / UF / CEP:** Nova Lima / MG — CEP 34002-184
- **Telefone / WhatsApp Comercial:** [(31) 99285-5049](tel:+5531992855049)
- **E-mail Oficial:** `alvesrefrigeracaomg@gmail.com`
- **Domínio Canônico:** [https://alvesrefrigeracao.com.br](https://alvesrefrigeracao.com.br)
- **Horário de Atendimento:** Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00 (Plantão emergencial)

---

## 7. Documentação e Governança do Projeto

A documentação completa do projeto e das decisões de arquitetura está disponível na pasta `docs/`:

- [Visão do Produto](docs/product/vision.md)
- [Auditoria Baseline de SEO](docs/product/seo-audit-baseline.md)
- [Mapa de Palavras-Chave e Intenções de Busca](docs/product/keyword-map.md)
- [Arquitetura de Informação e URLs](docs/product/information-architecture.md)
- [Especificação de Requisitos (RFs e RNFs)](docs/product/requirements.md)
- [Regras de Conteúdo e Diretrizes E-E-A-T](docs/product/content-rules.md)
- [Catálogo de Critérios de Aceite](docs/product/acceptance-criteria.md)
- [Dúvidas Abertas e Defaults Seguros](docs/product/open-questions.md)
- [Guia do Perfil da Empresa no Google](docs/seo/google-business-profile-guide.md)
- [Guia do Google Search Console](docs/seo/google-search-console-guide.md)
- [Guia de Citações NAP e Coleta de Avaliações](docs/seo/local-citations-and-reviews-guide.md)
- [Estratégia de Conteúdo Local e Sazonal](docs/seo/local-content-strategy.md)
- [Registro de Decisões Arquiteturais (ADRs)](docs/decisions/)

---

## 8. Licença
Propriedade privada de Alves Refrigeração & Climatização. Todos os direitos reservados.
