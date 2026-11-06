---
trigger: always_on
description: Convenções de código Angular/TypeScript do projeto cli_ar_homepage.
---

# Convenções Angular / TypeScript

1. **TypeScript estrito:** sem `any` novo sem justificativa; tipar dados de conteúdo com interfaces em `src/app/data/*.model.ts`.
2. **Nomenclatura:** arquivos `kebab-case` (`service-detail.component.ts`), classes `PascalCase`, seletores com prefixo `app-`.
3. **Componentes standalone** com `imports` explícitos; preferir controle de fluxo moderno (`@if`, `@for`) em código novo.
4. **Estilos:** CSS por componente; respeitar budgets do `angular.json` (`anyComponentStyle` ≤ 20 kB erro). Variáveis globais de cor/tipografia em `src/styles.css`.
5. **Sem código morto:** remover imports e variáveis não usados nos arquivos tocados.
6. **Links internos:** usar `routerLink` para páginas; âncoras `#id` apenas para seções da mesma página.
7. **Links externos:** `target="_blank"` sempre com `rel="noopener noreferrer"`.
8. **Textos ao cliente:** pt-BR correto, sem erros ortográficos (ex: "Conserto", não "Concerto").
9. **Comentários existentes** não relacionados à mudança devem ser preservados.
