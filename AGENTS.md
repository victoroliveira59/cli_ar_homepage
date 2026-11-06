# Diretrizes Globais de Desenvolvimento — Alves Refrigeração & Climatização (Homepage)

> Regras permanentes e universais para todos os agentes e desenvolvedores que atuam no repositório `cli_ar_homepage`.
> Estas regras têm precedência e devem ser obedecidas em todas as fases e tarefas.
> Estrutura de Harness herdada do padrão corporativo (projeto de referência: OradorPro).

---

## 1. Princípios Fundamentais

1. **Uma task ativa por vez:** Nenhum agente deve executar múltiplas tarefas concorrentemente sem autorização expressa do Maestro.
2. **Execução sequencial por padrão:** O ciclo de entrega segue rigorosamente:
   `Analista` → `Engenheiro` → `Tester` → `Revisor` → `Maestro`.
3. **Sem implementação sem especificação:** Nenhuma linha de código deve ser escrita sem requisitos claros, regras definidas e critérios de aceite testáveis (`docs/product/`).
4. **Sem conclusão sem evidência:** Uma tarefa só é declarada `DONE` quando build, testes, auditoria SEO automatizada e relatórios comprovarem o resultado. Suposição não é evidência.
5. **Mudanças estritamente rastreáveis:** Toda alteração de arquivo deve estar associada a uma fase e task ativa registrada em `.ai/workflow-state.md` e `.ai/tasks.md`.
6. **Escopo estrito:** Os agentes são proibidos de expandir o escopo deliberadamente ou assumir funcionalidades não solicitadas.
7. **Registro obrigatório de decisões (ADRs):** Decisões técnicas ou de produto de impacto duradouro devem ser registradas em `docs/decisions/` no formato ADR.
8. **Segurança por padrão:** Credenciais, tokens e chaves NUNCA devem ser commitados.
9. **Falha não é sucesso:** Erros de build, testes quebrados/ignorados ou auditoria SEO reprovada resultam em `FAILED` ou `NEEDS_CHANGES`.
10. **SEO orgânico ético (White-Hat):** Proibido usar técnicas que violem as diretrizes do Google Search (cloaking, keyword stuffing, doorway pages, avaliações falsas ou marcação de dados estruturados enganosa).
11. **Soberania humana (Human-in-the-Loop):** Publicação em produção (merge na `main` / deploy), custos, ações destrutivas e decisões de negócio ambíguas exigem aprovação humana.
12. **Execução autônoma entre fases:** Autorizada pelo usuário (ver `docs/decisions/ADR-0001-execucao-autonoma-entre-fases.md`). O Maestro avança de fase sem acionar o usuário, exceto nas condições de parada do `.ai/HARNESS.md`.

---

## 2. Papéis dos Agentes

- **Maestro (Orquestrador):** Conduz o fluxo, valida DoR/DoD, atualiza estados, delega tasks, controla rodadas de correção e interrompe o fluxo quando necessário. Não codifica funcionalidades.
- **Analista (Requisitos, SEO e Conteúdo):** Refina requisitos, mapa de palavras-chave locais, arquitetura de informação, regras de conteúdo e critérios de aceite. Não codifica.
- **Engenheiro (Angular/SSR):** Implementa código Angular 19 standalone com SSR/prerender, SEO técnico, performance e testes unitários associados.
- **Tester (Qualidade):** Executa build, testes unitários (Karma/Jasmine headless) e auditoria SEO do HTML pré-renderizado, com evidências reais.
- **Revisor (Revisão Independente):** Inspeciona diffs, segurança, diretrizes do Google, acessibilidade, padrões Angular e critérios de aceite. Atribui severidades (`CRITICAL`, `HIGH`, `MEDIUM`, `LOW`).

---

## 3. Limite de Rodadas de Correção

- Máximo de **três rodadas de correção** por task (`1/3`, `2/3`, `3/3`), sem contar a execução inicial.
- Se a task não for aprovada na terceira rodada, o Maestro marca `BLOCKED` e suspende o avanço até decisão humana.
- É proibido zerar o contador de iterações para contornar o bloqueio.

---

## 4. Padrões de Comunicação e Relatórios

- Toda interação segue o contrato em `.ai/agent-contract.md`.
- Toda finalização de trabalho de um agente produz relatório em `docs/agent-runs/<fase>/<task-id>/`.
- Idioma obrigatório da documentação e relatórios: **Português do Brasil (pt-BR)**. Código-fonte e identificadores seguem convenções em Inglês; textos visíveis ao cliente final em pt-BR.
