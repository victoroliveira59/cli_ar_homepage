# ADR-0001 — Execução Autônoma entre Fases

- **Status:** Aceito
- **Data:** 2026-11-06
- **Decisor:** Usuário (Victor Oliveira) — instrução explícita: "a cada fase execute a próxima sem precisar me acionar, lembrando dos loops que devemos respeitar".

## Contexto
No padrão OradorPro, o encerramento de fase exige validação humana antes de avançar. O usuário dispensou essa validação para este projeto.

## Decisão
1. O Maestro encadeia tasks e fases automaticamente após cada `DONE`.
2. O relatório `docs/phases/phase-<XX>-completion.md` continua obrigatório.
3. Permanecem **inalterados**: fluxo sequencial de agentes, DoR/DoD, evidências obrigatórias e o **limite de 3 rodadas de correção** com bloqueio (`BLOCKED`).
4. Permanecem como **condições de parada**: decisão bloqueante, credencial ausente, risco de segurança/perda de dados, 3 iterações esgotadas e ações sensíveis (merge na `main`, deploy, DNS, Search Console).
5. Dúvidas `NÃO BLOQUEANTES` seguem o default seguro recomendado pelo Analista e ficam registradas para validação posterior do usuário.

## Ambiente
O repositório de trabalho do agente é um clone em área de trabalho isolada (branch `feat/harness-seo-local`); a entrega ao repositório do usuário é via push de branch + Pull Request.

## Consequências
Maior velocidade de entrega; o usuário revisa o resultado consolidado no Pull Request.
