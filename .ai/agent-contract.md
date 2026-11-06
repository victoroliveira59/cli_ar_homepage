# Contrato de Comunicação e Execução Multiagente

> Interfaces formais de entrada, saída, transição e tratamento de erros entre os agentes do Harness do projeto `cli_ar_homepage`.

---

## 1. Contrato de Invocação (Entrada para o Agente)

Toda delegação do **Maestro** deve conter os 8 elementos:

1. **Fase:** identificador e nome (ex: `03 - SEO Técnico e Indexabilidade`).
2. **Task:** identificador e título (ex: `T03.01 - Remover gate de spinner`).
3. **Objetivo e Escopo:** *Incluído* e *Excluído*.
4. **Contexto e Arquivos Obrigatórios:** arquivos a ler antes de agir.
5. **Dependências e Decisões Prévias:** ADRs e entregáveis anteriores.
6. **Critérios de Aceite:** lista testável.
7. **Restrições Mandatórias:** ações proibidas.
8. **Formato e Destino da Entrega:** arquivos a gerar.

---

## 2. Contrato de Saída (Agent Report Padronizado)

Arquivo: `docs/agent-runs/<fase>/<task-id>/<agent>-report.md`
(`analysis-report.md`, `implementation-report.md`, `test-report.md`, `review-report.md`, `maestro-report.md`)

```markdown
# Agent Report

- Agent: [MAESTRO | ANALISTA | ENGENHEIRO | TESTER | REVISOR]
- Phase: [Fase]
- Task: [Task]
- Status: [COMPLETED | BLOCKED | NEEDS_CHANGES | FAILED]
- Iteration: [0/3 | 1/3 | 2/3 | 3/3]

## Resumo
## Arquivos Consultados
## Arquivos Criados ou Alterados
## Decisões Tomadas
## Critérios de Aceite Atendidos
- [x] Critério: como foi atendido
## Testes e Comandos Executados
## Evidências
## Riscos e Pendências
## Próximo Agente Recomendado
```

---

## 3. Semântica dos Status
- **`COMPLETED`**: escopo cumprido e critérios comprovados com evidências.
- **`BLOCKED`**: impedido por dependência, ambiguidade ou decisão humana pendente. Não preencher lacunas com suposições.
- **`NEEDS_CHANGES`**: emitido por Tester/Revisor ao encontrar defeitos, testes reprovados, violações de diretrizes do Google, a11y ou segurança.
- **`FAILED`**: falha irrecuperável de ambiente ou build.

---

## 4. Change Request
Arquivo: `docs/agent-runs/<fase>/<task-id>/change-request-iter-<N>.md` (template em `docs/templates/change-request-template.md`).

---

## 5. Regras Rígidas de Hand-off
1. **Sequência:** `Analista` → `Engenheiro` → `Tester` → `Revisor` → `Maestro` nunca é invertida ou encurtada.
2. **Sem Auto-Aprovação:** um agente não valida o próprio trabalho (Tester e Revisor são instâncias independentes do Engenheiro).
3. **Evidência Obrigatória:** relatório sem comandos reais é devolvido.
4. **Limite de 3 Rodadas:** após `3/3` sem aprovação → `BLOCKED`.
