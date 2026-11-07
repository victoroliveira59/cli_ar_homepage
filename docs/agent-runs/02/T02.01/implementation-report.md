# Agent Report

- Agent: ENGENHEIRO
- Phase: 02 - Fundação Técnica e Qualidade
- Task: T02.01 - Fontes self-hosted (@fontsource), corrigir specs quebrados, script test:ci (ChromeHeadless)
- Status: COMPLETED
- Iteration: 1/3

## Resumo
Substituição das fontes remotas do Google Fonts por fontes locais self-hosted via pacotes `@fontsource/poppins` e `@fontsource/inter` (subset latin para manter o bundle de estilo dentro do budget de 1MB). Correção do spec `src/app/app.component.spec.ts` para testar os estados reais do componente em vez de propriedades inexistentes. Adição do script `test:ci` no `package.json` e configuração do `karma.conf.js` para execução headless estável no Windows com flags (`--headless`, `--no-sandbox`, `--disable-gpu`, `--disable-dev-shm-usage`, `--remote-debugging-port=0`).

Atendimento ao Change Request Iteração 1/3:
- `ContatoComponent`: adicionado `provideHttpClient()` e `provideHttpClientTesting()` no TestBed.
- `ApiService`: adicionado `provideHttpClient()` e `provideHttpClientTesting()` no TestBed.
- `ServicosComponent`: adicionado mock resiliente de jQuery/slick no spec e incluídos scripts do jQuery e Slick no target `test.options.scripts` em `angular.json`.
- Validação completa comprovando 19/19 testes unitários existentes passando com 100% de sucesso no `test:ci` e build verde (`npm run build`).

## Arquivos Consultados
- `package.json`
- `angular.json`
- `karma.conf.js`
- `src/index.html`
- `src/styles.css`
- `src/app/app.component.ts`
- `src/app/app.component.spec.ts`
- `src/app/pages/contato/contato.component.spec.ts`
- `src/app/services/api.service.spec.ts`
- `src/app/pages/servicos/servicos.component.spec.ts`
- `docs/agent-runs/02/T02.01/change-request-iter-1.md`

## Arquivos Criados ou Alterados
- `src/index.html`: Remoção das tags `<link rel="stylesheet">` externas apontando para `fonts.googleapis.com`.
- `src/styles.css`: Adição de imports locais de `@fontsource/poppins/latin.css` e `@fontsource/inter/latin.css`.
- `src/app/app.component.spec.ts`: Atualização das suítes de teste de criação e validação de `isLoading` e `visibleSections`.
- `src/app/pages/contato/contato.component.spec.ts`: Adicionado `provideHttpClient()` e `provideHttpClientTesting()` aos providers do TestBed.
- `src/app/services/api.service.spec.ts`: Adicionado `provideHttpClient()` e `provideHttpClientTesting()` aos providers do TestBed.
- `src/app/pages/servicos/servicos.component.spec.ts`: Mock de inicialização do slick/jQuery no `beforeAll` do teste.
- `package.json`: Adição do script `"test:ci": "ng test --watch=false --browsers=ChromeHeadless"`.
- `karma.conf.js`: Criação do arquivo de configuração Karma com custom launcher `ChromeHeadless` (`--headless`, `--no-sandbox`, `--disable-gpu`, `--disable-dev-shm-usage`, `--remote-debugging-port=0`).
- `angular.json`: Configuração de `"karmaConfig": "karma.conf.js"` e adição de `jquery.min.js` e `slick.min.js` em `test.options.scripts`.

## Decisões Tomadas
- O subset importado foi `@fontsource/poppins/latin.css` e `@fontsource/inter/latin.css` para garantir que o bundle inicial não ultrapasse o budget estrito de 1.00 MB (`Initial total: 994.59 kB`), eliminando subsets não utilizados em pt-BR (devanagari, cyrillic, vietnamese).
- Configuração do `karma.conf.js` para garantir compatibilidade com o Chrome 140 no Windows (`--no-sandbox`, `--disable-gpu`, `--disable-dev-shm-usage`, `--remote-debugging-port=0`).
- Inclusão dos scripts globais do jQuery e slick nas opções de teste do `angular.json`, garantindo paridade com as dependências do bundle de build da aplicação.

## Critérios de Aceite Atendidos
- [x] **AC-03.05 (Antecipado para T02.01):** Remoção das tags `<link>` apontando para `fonts.googleapis.com` em `src/index.html`.
- [x] **AC-03.06 (Antecipado para T02.01):** Fontes Poppins e Inter importadas via `@fontsource` em `src/styles.css` com `font-display: swap` padrão.
- [x] **Specs e Script CI:** Script `"test:ci": "ng test --watch=false --browsers=ChromeHeadless"` adicionado e `app.component.spec.ts` corrigido.
- [x] **Correção CR Iteração 1/3:** 0 testes falhando, 0 testes ignorados, 19/19 testes executados e aprovados com sucesso.
- [x] **Build Verde:** SSR e prerendering compilados com sucesso sem estourar budgets.

## Testes e Comandos Executados
1. `$env:CHROME_BIN = "C:\Program Files\Google\Chrome\Application\chrome.exe"; npm run test:ci`
2. `npm run build`

## Evidências
### Execução dos Testes (`npm run test:ci`)
```text
> cli-ar@0.0.0 test:ci
> ng test --watch=false --browsers=ChromeHeadless

- Generating browser application bundles (phase: setup)...
√ Browser application bundle generation complete.
06 11 2026 20:57:37.493:INFO [karma-server]: Karma v6.4.4 server started at http://localhost:9876/
06 11 2026 20:57:37.496:INFO [launcher]: Launching browsers ChromeHeadless with concurrency unlimited
06 11 2026 20:57:37.509:INFO [launcher]: Starting browser Chrome
06 11 2026 20:57:38.749:INFO [Chrome Headless 140.0.0.0 (Windows 10)]: Connected on socket vY5oB7lI2o2i6H5eAAAB with id 16049280
Chrome Headless 140.0.0.0 (Windows 10): Executed 0 of 19 SUCCESS (0 secs / 0 secs)
...
Chrome Headless 140.0.0.0 (Windows 10): Executed 19 of 19 SUCCESS (0.366 secs / 0.35 secs)
TOTAL: 19 SUCCESS
```

### Execução do Build (`npm run build`)
```text
> cli-ar@0.0.0 build
> npx ng build

> Building...
√ Building...
Browser bundles      
Initial chunk files   | Names              |  Raw size | Estimated transfer size
main-VNBUXAE5.js      | main               | 496.97 kB |               121.96 kB
styles-D6CQEFXH.css   | styles             | 249.33 kB |                38.26 kB
scripts-WD5Y5B35.js   | scripts            | 213.77 kB |                57.24 kB
polyfills-FFHMD2TL.js | polyfills          |  34.52 kB |                11.28 kB

                      | Initial total      | 994.59 kB |               228.74 kB

Prerendered 4 static routes.
Application bundle generation complete. [5.289 seconds]
Output location: C:\Users\Victor Oliveira\.gemini\antigravity\scratch\cli_ar_homepage\dist\cli_ar
```

## Riscos e Pendências
- O initial bundle total está em 994.59 kB, muito próximo do teto de 1MB. Nas próximas tasks da Fase 02/03 (remoção do spinner e scripts desnecessários), o tamanho diminuirá consideravelmente.
- Nenhuma pendência impeditiva.

## Próximo Agente Recomendado
- TESTER
