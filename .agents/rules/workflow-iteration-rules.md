---
trigger: always_on
description: Regras da máquina de estados do Harness, transições válidas, controle de iterações, execução autônoma e bloqueio humano.
---

# Regras do Workflow, Estados e Iterações

## 1. Estados Oficiais da Task

| Estado | Significado |
| :--- | :--- |
| `BACKLOG` | Identificada no planejamento, aguardando início da fase ou refinamento. |
| `READY` | Atende à DoR; apta para execução. |
| `IN_PROGRESS` | Em execução pelo agente ativo. |
| `WAITING_REVIEW` | Entrega concluída, aguardando testes/revisão. |
| `TESTING` | Em validação ativa pelo Tester. |
| `NEEDS_CHANGES` | Defeitos encontrados; direcionada para correção. |
| `BLOCKED` | Bloqueada por dependência, decisão pendente ou limite de correções. |
| `DONE` | Atende integralmente à DoD, com evidências registradas. |
| `CANCELLED` | Cancelada justificadamente com aprovação humana. |

## 2. Transições Válidas

```text
BACKLOG -> READY
READY -> IN_PROGRESS
IN_PROGRESS -> WAITING_REVIEW
WAITING_REVIEW -> TESTING
TESTING -> NEEDS_CHANGES
TESTING -> DONE
NEEDS_CHANGES -> IN_PROGRESS
qualquer estado não terminal -> BLOCKED
BLOCKED -> estado anterior (após resolução do bloqueio)
BACKLOG / READY -> CANCELLED (com justificativa registrada)
```

- **Autoridade Exclusiva:** apenas o Maestro altera `.ai/workflow-state.md` e `.ai/tasks.md`.

## 3. Limite de Rodadas de Correção (Iteration Guardrail)

1. Até **três rodadas de correção** por task (`1/3`, `2/3`, `3/3`), sem contar a entrega inicial.
2. A cada reprovação (Tester ou Revisor), o Maestro incrementa o contador e emite `Change Request`.
3. Se após a 3ª rodada a task continuar reprovada:
   - O Maestro **deve** mudar o estado para `BLOCKED`.
   - O Maestro gera alerta em `.ai/workflow-state.md` e solicita intervenção humana.
   - Proibido reiniciar o contador ou forçar avanço.

## 4. Execução Autônoma (ADR-0001)

1. Ao concluir uma task `DONE`, o Maestro seleciona a próxima task do `.ai/tasks.md` cuja DoR esteja satisfeita e a executa sem acionar o usuário.
2. Ao concluir todas as tasks de uma fase, o Maestro gera `docs/phases/phase-<XX>-completion.md` e inicia a próxima fase automaticamente.
3. A autonomia **não** se sobrepõe às condições de parada do `.ai/HARNESS.md` §7.

## 5. Git
1. Branch de trabalho: `feat/<escopo>`; nunca commitar direto na `main`.
2. Um commit por task concluída: `<tipo>(<task-id>): <descrição>` (ex: `feat(T03.01): render content in prerendered HTML`).
3. Merge na `main` = publicação → exige aprovação humana via Pull Request.
