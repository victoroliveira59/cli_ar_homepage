---
trigger: always_on
description: Diretrizes de testes, garantia de qualidade, evidências obrigatórias e critérios de aceitação.
---

# Regras de Qualidade e Validação de Testes

## 1. Princípio da Evidência Real
1. Nenhuma task é `DONE` sem evidência real. O relatório do Tester contém:
   - Linha de comando exata executada.
   - Totais de testes executados/aprovados/falhos/ignorados.
   - Resultado do `npm run seo:audit` (quando aplicável).
2. **Proibido falso positivo:** `xit`, `xdescribe`, `fit`, asserções vazias ou testes comentados para contornar falhas.
3. **Reprodutibilidade:** defeitos reportados com passos, entradas, esperado vs obtido.

## 2. Pirâmide de Testes
1. **Unitários (Karma + Jasmine, ChromeHeadless):** componentes, `SeoService`, dados de conteúdo (integridade de NAP, slugs únicos, títulos ≤ 60).
2. **Auditoria SEO (Node, sem rede):** `scripts/seo-audit.mjs` lê `dist/cli_ar/browser/**/index.html` e valida title, description, canonical, h1 único, JSON-LD válido, ausência de `aggregateRating` autodeclarado, sitemap × rotas, tamanho de imagens.
3. **Build de produção** com SSR + prerender sem erro e dentro dos budgets.

## 3. Cenários Negativos
- Rota inexistente → página 404 com `noindex`.
- Ausência de `window` no SSR não quebra render.
- Links externos com `rel` correto.
