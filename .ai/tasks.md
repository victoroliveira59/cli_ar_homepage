# Catálogo Mestre de Fases e Tarefas — Homepage Alves Refrigeração & Climatização

> Registro central de tarefas (backlog), responsáveis, dependências e status oficial.
> Apenas o Maestro transiciona status neste documento.

---

## Legenda de Status
`BACKLOG` · `READY` · `IN_PROGRESS` · `WAITING_REVIEW` · `TESTING` · `NEEDS_CHANGES` · `BLOCKED` · `DONE` · `CANCELLED`

---

## Fase 00 — Preparação do Harness
*Objetivo: Estabelecer regras, agentes, contratos, skills, templates e controle de estado.*

| ID | Título da Task | Responsável | Dependência | Status |
| :--- | :--- | :--- | :--- | :--- |
| **T00.01** | Criar estrutura `.agents/`, `.ai/`, `docs/`, `AGENTS.md`, `SPEC.md` | Maestro | Nenhuma | `DONE` |
| **T00.02** | Criar templates, ADR-0000 (registro) e ADR-0001 (execução autônoma) | Maestro | T00.01 | `DONE` |
| **T00.03** | Registrar baseline de build/testes e ambiente | Maestro | T00.01 | `DONE` |

---

## Fase 01 — Discovery SEO e Requisitos
*Objetivo: Auditoria de baseline, mapa de palavras-chave locais, arquitetura de informação, requisitos e critérios de aceite de todas as tasks.*

| ID | Título da Task | Responsável | Dependência | Status |
| :--- | :--- | :--- | :--- | :--- |
| **T01.01** | Auditoria SEO baseline, visão, keyword map, arquitetura de informação, requisitos, regras de conteúdo, critérios de aceite e open-questions | Analista | Fase 00 | `DONE` |

---

## Fase 02 — Fundação Técnica e Qualidade
*Objetivo: Build reproduzível offline, suíte de testes verde, auditoria SEO automatizada e CI.*

| ID | Título da Task | Responsável | Dependência | Status |
| :--- | :--- | :--- | :--- | :--- |
| **T02.01** | Fontes self-hosted (@fontsource), corrigir specs quebrados, script `test:ci` (ChromeHeadless) | Engenheiro | T01.01 | `DONE` |
| **T02.02** | Script `seo:audit` (HTML pré-renderizado) + workflow GitHub Actions (build, test, audit) | Engenheiro | T02.01 | `DONE` |

---

## Fase 03 — SEO Técnico e Indexabilidade
*Objetivo: Conteúdo 100% no HTML pré-renderizado, páginas indexáveis com metadados únicos, sitemap, robots e dados estruturados válidos.*

| ID | Título da Task | Responsável | Dependência | Status |
| :--- | :--- | :--- | :--- | :--- |
| **T03.01** | Remover gate de spinner/`isLoading` que esconde conteúdo do prerender; corrigir acessos SSR-unsafe | Engenheiro | T02.02 | `IN_PROGRESS` |
| **T03.02** | Roteamento real (shell + `router-outlet`), `SeoService` (title/meta/canonical/OG) e `business-info.ts` (NAP único) | Engenheiro | T03.01 | `BACKLOG` |
| **T03.03** | `robots.txt`, `sitemap.xml`, JSON-LD `HVACBusiness`/`WebSite`/`BreadcrumbList` sem avaliações autodeclaradas, página 404 `noindex` | Engenheiro | T03.02 | `BACKLOG` |

---

## Fase 04 — SEO Local e Conteúdo
*Objetivo: Páginas por intenção de busca com conteúdo único e útil.*

| ID | Título da Task | Responsável | Dependência | Status |
| :--- | :--- | :--- | :--- | :--- |
| **T04.01** | Páginas dedicadas por serviço (`/servicos/<slug>`) com conteúdo único e schema `Service` | Engenheiro | T03.03 | `BACKLOG` |
| **T04.02** | Página de áreas atendidas e FAQ (`FAQPage`) com links internos | Engenheiro | T04.01 | `BACKLOG` |

---

## Fase 05 — Performance e Core Web Vitals
*Objetivo: LCP rápido e peso de página reduzido.*

| ID | Título da Task | Responsável | Dependência | Status |
| :--- | :--- | :--- | :--- | :--- |
| **T05.01** | Otimização de imagens (WebP, redimensionamento, `NgOptimizedImage`, `priority` no LCP) e remoção de artefatos mortos | Engenheiro | T04.02 | `BACKLOG` |

---

## Fase 06 — Design Profissional, Conversão e Acessibilidade
*Objetivo: Visual profissional de empresa de climatização, CTAs claros e acessibilidade.*

| ID | Título da Task | Responsável | Dependência | Status |
| :--- | :--- | :--- | :--- | :--- |
| **T06.01** | Refinamento visual da home (hero, diferenciais, processo, CTA final), consistência de marca e acessibilidade | Engenheiro | T05.01 | `BACKLOG` |

---

## Fase 07 — Entrega e Release
*Objetivo: Guia de SEO off-page, documentação e Pull Request para aprovação humana.*

| ID | Título da Task | Responsável | Dependência | Status |
| :--- | :--- | :--- | :--- | :--- |
| **T07.01** | Guia SEO off-page (Perfil da Empresa no Google, Search Console, citações NAP, avaliações, plano de conteúdo) + README | Analista | T06.01 | `BACKLOG` |
| **T07.02** | Validação final de release, push da branch e Pull Request (merge exige aprovação humana) | Maestro | T07.01 | `BACKLOG` |
