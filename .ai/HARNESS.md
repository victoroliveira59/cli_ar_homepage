# AI Agent Harness — Manual Operacional do Sistema

> Projeto: Homepage Alves Refrigeração & Climatização (`cli_ar_homepage`)  
> Versão do Harness: 1.0 (padrão corporativo derivado do OradorPro)  
> Plataforma: Google Antigravity / Angular 19 SSR / Node 22  
> Idioma: Português (Brasil)

---

## 1. Visão Geral
O Harness é a infraestrutura de governança, qualidade, regras operacionais e rastreabilidade do projeto. Ele impõe:
- Máquina de estados determinística para tarefas e fases.
- Contrato estrito de comunicação entre agentes (`.ai/agent-contract.md`).
- Limite de iterações para correções (guardrail anti-loop: 3 rodadas).
- Evidências reais obrigatórias para aprovação.
- Soberania humana para produção, custos e decisões críticas.

## 2. Agentes Especializados

| Agente | Papel | Responsabilidade Principal |
| :--- | :--- | :--- |
| **Maestro** | Orquestrador | Máquina de estados, delegação sequencial, DoR/DoD, iterações e bloqueios. |
| **Analista** | Requisitos, SEO e Conteúdo | Requisitos, mapa de palavras-chave, arquitetura de informação, critérios de aceite, dúvidas em aberto. |
| **Engenheiro** | Angular/SSR | Implementação Angular standalone, SSR/prerender, SEO técnico, performance e testes unitários. |
| **Tester** | Qualidade | Build, testes Karma headless, auditoria SEO (`npm run seo:audit`) e evidências. |
| **Revisor** | Auditor Independente | Diffs, segurança, diretrizes do Google, acessibilidade, matriz de severidade. |

Definições: `.agents/agents/<agente>/agent.md`. Prompts operacionais: `.ai/prompts/`.

## 3. Máquina de Estados

### 3.1 Estados de uma Task
`BACKLOG`, `READY`, `IN_PROGRESS`, `WAITING_REVIEW`, `TESTING`, `NEEDS_CHANGES`, `BLOCKED`, `DONE`, `CANCELLED` (ver `.agents/rules/workflow-iteration-rules.md`).

### 3.2 Diagrama
```text
BACKLOG -> READY -> IN_PROGRESS -> WAITING_REVIEW -> TESTING -> DONE
                                              ↑           ↓
                                              └── NEEDS_CHANGES
Qualquer estado não-terminal -> BLOCKED -> Estado anterior (após resolução)
```

## 4. Guardrail de Iterações
- **Limite:** 3 rodadas de correção por task (`1/3`, `2/3`, `3/3`).
- **Bloqueio automático:** falha após a 3ª rodada → `BLOCKED` + intervenção humana.
- Proibido reiniciar contadores.

## 5. Critérios de Entrada e Saída

### 5.1 Definition of Ready (DoR)
1. Objetivo claro e escopo incluído/excluído delimitado.
2. Dependências com status `DONE`.
3. Nenhuma dúvida **bloqueante** aberta em `docs/product/open-questions.md`.
4. Critérios de aceite testáveis.

### 5.2 Definition of Done (DoD)
1. Implementação contida no escopo.
2. 100% dos critérios de aceite atendidos.
3. `npm run build` (produção, SSR + prerender) sem erros.
4. `npm run test:ci` 100% verde.
5. `npm run seo:audit` aprovado (a partir da task que o cria).
6. Revisão sem achados `CRITICAL`/`HIGH`.
7. Relatórios em `docs/agent-runs/<fase>/<task-id>/`.
8. Maestro registra a transição em `workflow-state.md`, `tasks.md` e `execution-log.md`.

## 6. Execução Autônoma entre Fases
Conforme ADR-0001, o usuário autorizou o Maestro a encadear tasks e fases sem solicitar aprovação a cada fechamento. O relatório de conclusão de fase continua obrigatório.

## 7. Condições de Parada Imediata
O Maestro interrompe e aguarda o usuário quando:
1. Decisão de produto/arquitetura **bloqueante** estiver pendente.
2. Dependência externa ou credencial estiver indisponível.
3. Houver risco de perda de dados ou quebra de segurança.
4. O limite de 3 iterações for atingido.
5. For exigida ação sensível: merge na `main`, deploy, publicação, alteração de DNS/Search Console.

## 8. Comandos Oficiais
```powershell
npm run build        # build produção + SSR + prerender
npm run test:ci      # Karma ChromeHeadless, execução única
npm run seo:audit    # auditoria do HTML pré-renderizado em dist/
```
