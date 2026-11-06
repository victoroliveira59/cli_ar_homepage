---
name: release-project
description: >-
  Instruções operacionais para encerramento de fases e validação final de release da homepage cli_ar_homepage, verificação dos critérios de sucesso e aprovação humana para publicação.
---

# Skill: Release Project

## 1. Critérios Mandatórios para Release
1. [ ] Todas as fases obrigatórias `DONE` em `.ai/tasks.md`.
2. [ ] `npm run build` (produção, SSR + prerender) sem erros e dentro dos budgets.
3. [ ] `npm run test:ci` 100% verde.
4. [ ] `npm run seo:audit` 100% verde para todas as rotas do sitemap.
5. [ ] Nenhum achado `CRITICAL`/`HIGH` pendente.
6. [ ] CI do GitHub Actions configurado (build + test + seo:audit).
7. [ ] Nenhum segredo versionado.
8. [ ] Guia off-page (Perfil da Empresa no Google, Search Console, citações NAP, avaliações) entregue em `docs/seo/`.
9. [ ] Pull Request aberto com resumo e evidências.
10. [ ] **Aprovação humana registrada** para merge na `main`/deploy.

## 2. Fechamento de Fase
1. Conferir tasks `DONE` e relatórios em `docs/agent-runs/<fase>/`.
2. Gerar `docs/phases/phase-<XX>-completion.md` (template `docs/templates/phase-completion-template.md`).
3. Conforme ADR-0001, seguir para a próxima fase sem aguardar o usuário; a fase de release final para no item 10.

## 3. Rollback
1. Deploy é feito a partir da `main`; rollback = revert do merge commit do PR.
2. Registrar commit/tag anterior estável no relatório de release.
