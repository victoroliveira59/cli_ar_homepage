# Workflow State — Homepage Alves Refrigeração & Climatização

- **Project:** cli_ar_homepage
- **Current Phase:** 05 - Performance e Core Web Vitals
- **Current Task:** T05.01 - Otimização de imagens (WebP, redimensionamento, `NgOptimizedImage`, `priority` no LCP) e remoção de artefatos mortos
- **Workflow Status:** IN_PROGRESS
- **Active Agent:** ENGENHEIRO
- **Correction Iteration:** 0/3
- **Last Completed Task:** T04.02 - Página de áreas atendidas e FAQ (`FAQPage`) com links internos
- **Blockers:** none
- **Last Updated:** 2026-11-06 22:00 BRT

---

## Current Objective
Otimizar o acervo de imagens pesadas (converter PNGs de 7-9 MB para WebP comprimido de alta qualidade < 200 kB), implementar `NgOptimizedImage` com dimensões explícitas e `priority` no LCP do Hero, e remover scripts/arquivos mortos na raiz (`fix_css.py`, scripts truncate soltos).

---

## Next Action
Engenheiro implementa T05.01.

---

## Approved Decisions
- ADR-0000: Registro de decisões.
- ADR-0001: Execução autônoma entre fases (autorizada pelo usuário).

---

## Evidence
- Ver `docs/agent-runs/00/T00.03/maestro-report.md`.
