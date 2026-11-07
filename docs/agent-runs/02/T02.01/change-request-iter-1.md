# Change Request — T02.01

- Iteration: 1/3
- Responsible agent: ENGENHEIRO
- Origin: TESTER
- Severity: HIGH

## Finding
A suíte de testes unitários automatizada (`npm run test:ci`) falhou com 3 testes quebrados de um total de 13 testes:
1. `ContatoComponent`: falha por ausência de provider HTTP (`NullInjectorError: No provider for _HttpClient!`).
2. `ApiService`: falha por ausência de provider HTTP (`NullInjectorError: No provider for _HttpClient!`).
3. `ServicosComponent`: falha na inicialização do slick-carousel por ausência de `$ / jQuery` no ambiente de teste do Karma.

## Evidence
Relatório do Tester em `docs/agent-runs/02/T02.01/test-report.md`.
```
NullInjectorError: R3InjectorError(DynamicTestModule)[ContatoComponent -> ApiService -> _HttpClient -> _HttpClient]: 
  NullInjectorError: No provider for _HttpClient!
```
```
TypeError: $(...).slick is not a function (ou jQuery indefinido no ServicosComponent)
```

## Expected Behavior
100% dos testes unitários executados por `npm run test:ci` devem passar sem erros, sem `NullInjectorError` e sem quebras de biblioteca externa.

## Required Correction
1. Em `src/app/pages/contato/contato.component.spec.ts`: adicionar `provideHttpClient()` e `provideHttpClientTesting()` nos `providers` do TestBed.
2. Em `src/app/services/api.service.spec.ts`: adicionar `provideHttpClient()` e `provideHttpClientTesting()` nos `providers` do TestBed.
3. Em `src/app/pages/servicos/servicos.component.spec.ts`: configurar mock ou importar adequadamente os scripts / módulos necessários para o carousel no TestBed sem disparar erro de `$`.
4. Executar `npm run test:ci` e comprovar 13/13 testes (100%) passando com sucesso.

## Acceptance Criteria for Correction
- [ ] `npm run test:ci` executa e passa 100% dos testes existentes (0 falhas, 0 ignorados).
- [ ] `npm run build` continua executando com sucesso (produção e SSR).

## Files in Scope
- `src/app/pages/contato/contato.component.spec.ts`
- `src/app/services/api.service.spec.ts`
- `src/app/pages/servicos/servicos.component.spec.ts`
- `karma.conf.js` / `angular.json` (se necessário para scripts de teste do jQuery)

## Restrictions
Proibido usar `xit`, `xdescribe` ou desabilitar os testes. Os testes devem rodar e passar de verdade.
