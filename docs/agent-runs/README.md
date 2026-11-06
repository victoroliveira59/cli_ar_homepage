# Agent Runs — Relatórios de Execução

Estrutura:

```text
docs/agent-runs/
└── <fase>/                          # ex: 03
    └── <task-id>/                   # ex: T03.01
        ├── analysis-report.md           # Analista
        ├── implementation-report.md     # Engenheiro
        ├── test-report.md               # Tester
        ├── review-report.md             # Revisor
        ├── change-request-iter-<N>.md   # Maestro (se houver correção)
        └── maestro-report.md            # Consolidação do Maestro
```

## Regras
- **Sem falsos registros:** proibido criar relatórios antes da execução real.
- **Imutabilidade histórica:** relatórios de iterações anteriores são preservados (sufixo `-iter-<N>`).
