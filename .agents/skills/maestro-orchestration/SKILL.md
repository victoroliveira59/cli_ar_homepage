---
name: maestro-orchestration
description: >-
  Instruções operacionais para o Maestro orquestrar o workflow multiagente do cli_ar_homepage, controlar a máquina de estados, gerenciar rodadas de correção, validar DoR/DoD e encadear fases de forma autônoma (ADR-0001).
---

# Skill: Maestro Orchestration

## 1. Abertura / Retomada de Sessão
1. Ler `.ai/HARNESS.md`, `.ai/workflow-state.md`, `.ai/tasks.md` e o fim de `.ai/execution-log.md`.
2. Reconciliar com o repositório real (`git status`, arquivos declarados existem). Divergência → `BLOCKED` + relatório.
3. Identificar estado da task ativa. Nunca executar mais de uma task.

## 2. DoR
1. Objetivo e escopo incluído/excluído.
2. Dependências `DONE`.
3. Sem dúvida `BLOQUEANTE` em `docs/product/open-questions.md`.
4. Critérios de aceite testáveis.
5. Transicionar `BACKLOG` → `READY`.

## 3. Delegação Sequencial
```text
[Analista]   Especifica / refina requisitos, SEO e critérios de aceite
   ↓
[Engenheiro] Implementa código Angular + testes unitários
   ↓
[Tester]     build + test:ci + seo:audit + inspeção do HTML pré-renderizado
   ↓
[Revisor]    Auditoria independente (diff, SEO, a11y, segurança)
   ↓
[Maestro]    Valida evidências, DoD, commit e transiciona para DONE
```
Tasks puramente de especificação (Analista) são validadas pelo Revisor (consistência, testabilidade, conformidade com diretrizes do Google); Tester valida apenas se houver artefato executável.

Cada delegação informa os 8 elementos do contrato (`.ai/agent-contract.md`) e aguarda o relatório.

## 4. Iterações (Limite 3)
Se Tester ou Revisor retornar `NEEDS_CHANGES`:
1. Incrementar contador em `.ai/workflow-state.md` (`1/3`, `2/3`, `3/3`).
2. Se ≤ 3: gerar `change-request-iter-<N>.md`, status `NEEDS_CHANGES`, devolver ao Engenheiro/Analista; depois Tester e Revisor validam novamente.
3. Se > 3: `BLOCKED`, registrar no log, parar e apresentar histórico ao usuário.

## 5. DoD e Encerramento
- [ ] Escopo respeitado.
- [ ] 100% dos critérios de aceite comprovados.
- [ ] `npm run build` verde.
- [ ] `npm run test:ci` verde.
- [ ] `npm run seo:audit` verde (quando existente).
- [ ] Revisão sem `CRITICAL`/`HIGH`.
- [ ] ADRs/documentação atualizados.
- [ ] Relatórios em `docs/agent-runs/<fase>/<task-id>/`.

Ao confirmar:
1. `DONE` em `.ai/workflow-state.md` e `.ai/tasks.md`.
2. Registrar em `.ai/execution-log.md`.
3. Gerar `maestro-report.md`.
4. Commit `<tipo>(<task-id>): <descrição>`.
5. **Autonomia:** iniciar a próxima task elegível; ao fim da fase, gerar `docs/phases/phase-<XX>-completion.md` e seguir para a próxima fase.
