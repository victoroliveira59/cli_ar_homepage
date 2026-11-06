---
name: validate-task
description: >-
  Instruções operacionais para Tester e Revisor validarem entregas do cli_ar_homepage: build, testes Karma headless, auditoria SEO do HTML pré-renderizado, revisão de diff, diretrizes do Google, acessibilidade e segurança.
---

# Skill: Validate Task

## 1. Tester
### 1.1 Preparação
1. Ler `docs/product/acceptance-criteria.md` (seção da task) e `implementation-report.md`.
2. Projetar cenários: feliz, negativos (404, SSR), bordas.

### 1.2 Execução
```powershell
npm run build
npm run test:ci
npm run seo:audit
```
Inspecionar `dist/cli_ar/browser/**/index.html` para os critérios de conteúdo.

### 1.3 Resultado
- 100% verde e critérios comprovados → `COMPLETED`.
- Qualquer falha → `NEEDS_CHANGES` com reprodução.
- Salvar `docs/agent-runs/<fase>/<task-id>/test-report.md`.

## 2. Revisor
### 2.1 Diff
`git status` + `git diff` (e arquivos novos não rastreados). Verificar arquitetura Angular, SSR-safety, NAP centralizado, código morto.

### 2.2 SEO / Google
Sem cloaking, doorway, stuffing, avaliações autodeclaradas; JSON-LD coerente com conteúdo visível; canonical/title/description únicos.

### 2.3 Acessibilidade e Segurança
`alt`, `aria-*`, contraste, foco; sem `innerHTML` inseguro; `rel="noopener noreferrer"`; sem segredos.

### 2.4 Matriz e Parecer
`CRITICAL`/`HIGH` → `NEEDS_CHANGES`; caso contrário `COMPLETED`.
Salvar `docs/agent-runs/<fase>/<task-id>/review-report.md`.

## 3. Consolidação pelo Maestro
Ambos `COMPLETED` → DoD → `DONE`. Qualquer `NEEDS_CHANGES` → Change Request + iteração (limite 3).
