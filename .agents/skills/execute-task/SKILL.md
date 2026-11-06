---
name: execute-task
description: >-
  Instruções operacionais para agentes executores (Analista ou Engenheiro) executarem uma task delegada no cli_ar_homepage, respeitando escopo, regras Angular/SEO e gerando relatórios padronizados.
---

# Skill: Execute Task

## 1. Recepção e Verificação de Escopo
1. Conferir Fase, Task ID, escopo incluído/excluído e critérios de aceite.
2. Verificar `docs/product/open-questions.md`. Impedimento bloqueante → relatório `BLOCKED`, sem suposições.

## 2. Analista
1. Ler `SPEC.md`, código atual e `.agents/rules/seo-rules.md`.
2. Escrever/atualizar `docs/product/` (requisitos, keyword map, arquitetura de informação, regras de conteúdo, critérios de aceite, dúvidas).
3. Gerar `docs/agent-runs/<fase>/<task-id>/analysis-report.md`.

## 3. Engenheiro
1. Ler critérios de aceite e `.agents/rules/`.
2. Implementar na camada correta (`core/`, `data/`, `components/`, `pages/`).
3. Criar/atualizar testes unitários.
4. Validar localmente:
   ```powershell
   npm run build
   npm run test:ci
   npm run seo:audit   # quando existente
   ```
5. Garantir ausência de segredos.
6. Gerar `docs/agent-runs/<fase>/<task-id>/implementation-report.md`.

## 4. Relatório
Seguir o template de `.ai/agent-contract.md` §2 e notificar o Maestro.
