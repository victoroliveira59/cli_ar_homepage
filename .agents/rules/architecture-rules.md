---
trigger: always_on
description: Regras de arquitetura front-end Angular 19 standalone com SSR/prerender para o projeto cli_ar_homepage.
---

# Regras de Arquitetura e Design (Angular SSR)

## 1. Estrutura de Pastas

```text
src/
├── app/
│   ├── core/          # serviços singleton (SeoService, dados da empresa, schema JSON-LD)
│   ├── data/          # conteúdo estático tipado (serviços, áreas, FAQ) — fonte única de verdade
│   ├── components/    # componentes reutilizáveis de UI (navbar, footer, cta, breadcrumb...)
│   ├── pages/         # componentes roteáveis (uma página = uma URL indexável)
│   └── services/      # serviços de UI existentes (whatsapp-modal etc.)
├── assets/            # imagens otimizadas (WebP/AVIF + fallback)
├── robots.txt
└── sitemap.xml
```

## 2. Princípios
1. **Conteúdo no HTML pré-renderizado:** todo texto indexável deve existir no output do prerender. Proibido esconder conteúdo principal atrás de `*ngIf` dependente de timers, `isPlatformBrowser` ou animações.
2. **Uma URL por intenção de busca:** cada página roteável define `title`, `meta description`, `canonical`, Open Graph e JSON-LD via `SeoService` a partir de `data` da rota ou do componente.
3. **Fonte única de dados da empresa (NAP):** nome, endereço, telefone, horários e áreas atendidas vivem em `src/app/core/business-info.ts`. Proibido duplicar NAP hardcoded em templates.
4. **Componentes standalone** e lazy loading por rota (`loadComponent`).
5. **APIs de browser protegidas:** acesso a `window`, `document`, `localStorage` somente via `isPlatformBrowser`/`afterNextRender`; nunca quebrar o SSR.
6. **Imagens:** usar `NgOptimizedImage` (`ngSrc`) com `width`/`height`, `priority` apenas no LCP, `alt` descritivo.
7. **Sem dependências novas sem ADR.**
8. **Respeito aos ADRs** em `docs/decisions/`.
