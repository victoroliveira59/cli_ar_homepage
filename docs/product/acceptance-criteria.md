# Catálogo de Critérios de Aceite Testáveis (Fases 02 a 07)

> Versão: 1.0 (2026-11-06)  
> Finalidade: Guia obrigatório para Engenheiro, Tester e Revisor durante a execução de cada fase do projeto.

---

## 1. Fase 02 — Arquitetura Técnica, SSR e Roteamento

### Task: Implementação do Layout Raiz e Remoção do Spinner Bloqueador
- [ ] **AC-02.01:** O arquivo `src/app/app.component.html` não deve conter a diretiva `*ngIf="!isLoading"` condicionando o corpo principal do site.
- [ ] **AC-02.02:** O elemento `<router-outlet></router-outlet>` deve estar presente no `app.component.html` entre o `<app-navbar>` e o `<app-footer>`.
- [ ] **AC-02.03:** O build com pré-renderização (`npm run build`) deve gerar no diretório de saída estática (`dist/cli_ar/browser/`) arquivos `index.html` pré-renderizados para cada rota configurada, contendo tags semânticas (`<h1>`, `<p>`, `<a>`) e conteúdo legível no HTML bruto sem necessidade de execução de JavaScript.
- [ ] **AC-02.04:** A inicialização do Angular no cliente não deve provocar recarregamento brusco de tela ou piscar de layout (FOUC).

### Task: Mapeamento de Rotas e Infraestrutura de Metadados
- [ ] **AC-02.05:** O arquivo `src/app/app.routes.ts` deve conter todas as rotas especificadas na Arquitetura de Informação:
  - `/` (Home)
  - `/ar-condicionado`
  - `/ar-condicionado/instalacao`
  - `/ar-condicionado/manutencao-limpeza`
  - `/refrigeracao`
  - `/refrigeracao/geladeiras-freezers`
  - `/refrigeracao/chopeiras-bebedouros`
  - `/areas-atendidas`
  - `/sobre`
  - `/contato`
  - `/perguntas-frequentes`
  - `**` (Redirecionamento para página 404 dedicada com meta `noindex`)
- [ ] **AC-02.06:** Deve existir um serviço centralizado (`SeoService` ou `MetadataService`) que, a cada mudança de rota, atualize:
  - `<title>` com no máximo 60 caracteres e padrão do Keyword Map.
  - `<meta name="description">` entre 70 e 160 caracteres.
  - `<link rel="canonical" href="...">` com a URL absoluta correspondente à rota.
- [ ] **AC-02.07:** Os arquivos `src/robots.txt` e `src/sitemap.xml` devem ser gerados e exportados no build, contendo todas as URLs canônicas da aplicação e referência correta ao sitemap.

---

## 2. Fase 03 — Performance e Otimização de Ativos (Core Web Vitals)

### Task: Otimização e Conversão de Imagens
- [ ] **AC-03.01:** Nenhuma imagem no repositório servida pelo site deve possuir tamanho superior a **300 kB**.
- [ ] **AC-03.02:** Os arquivos pesados atuais (`ConcertoGeladeira.png`, `ConcertoArcond.png`, `ConcertoBebedouro.png`, `troca-placa.png`, `capa_site.jpg`) devem ser substituídos por versões comprimidas no formato **WebP** com nomenclatura ortográfica correta (ex: `conserto-geladeira.webp`).
- [ ] **AC-03.03:** Todas as tags `<img>` dos componentes devem possuir os atributos numéricos `width` e `height` correspondentes à proporção original, evitando mudanças inesperadas de layout (CLS < 0,1).
- [ ] **AC-03.04:** Imagens que não fazem parte da primeira dobra visual (above-the-fold) devem possuir o atributo `loading="lazy"`. A imagem do hero principal deve possuir prioridade de carregamento (`fetchpriority="high"` ou similar).

### Task: Tipografia Self-Hosted e Eliminação de Recursos Externos Bloqueantes
- [ ] **AC-03.05:** Devem ser removidas do `src/index.html` as tags `<link rel="stylesheet">` que apontam para `fonts.googleapis.com`.
- [ ] **AC-03.06:** As fontes Poppins e Inter devem ser carregadas via imports locais do `@fontsource` em `src/styles.css` com a propriedade `font-display: swap;`.

---

## 3. Fase 04 — Estruturação de Dados e SEO On-Page

### Task: Implementação do Schema HVACBusiness e Limpeza de Infrações
- [ ] **AC-04.01:** O schema JSON-LD gerado na raiz da aplicação deve utilizar o tipo principal `@type: "HVACBusiness"` (ou `["HVACBusiness", "LocalBusiness"]`).
- [ ] **AC-04.02:** O bloco `aggregateRating` presente no JSON-LD atual deve ser **completamente removido**, eliminando qualquer risco de penalidade por review autodeclarado.
- [ ] **AC-04.03:** O JSON-LD deve ser alimentado diretamente pelas constantes do arquivo `business-info.ts`, garantindo que telefone, logradouro, CEP, coordenadas geográficas e horários sejam idênticos ao texto da página.

### Task: Schemas Específicos por Rota (Service, BreadcrumbList, FAQPage)
- [ ] **AC-04.04:** As páginas de serviços específicos (`/ar-condicionado/*` e `/refrigeracao/*`) devem injetar schema do tipo `Service` contendo nome do serviço, descrição, área de atendimento e provedor (`HVACBusiness`).
- [ ] **AC-04.05:** Todas as páginas internas que possuem trilha de navegação visual devem injetar schema `BreadcrumbList` com itens ordenados e URLs absolutas.
- [ ] **AC-04.06:** A página `/perguntas-frequentes` deve injetar schema `FAQPage` contendo estritamente as perguntas e respostas visíveis no acordeão da interface.
- [ ] **AC-04.07:** O script de auditoria de SEO (`seo:audit`) deve validar que todo JSON-LD injetado no HTML pré-renderizado é um JSON perfeitamente válido sem erros de sintaxe.

---

## 4. Fase 05 — Páginas de Conteúdo, Serviços e UX

### Task: Refatoração da Home e Páginas Hub de Serviços
- [ ] **AC-05.01:** A página inicial (`/`) deve conter exatamente um `<h1>` semântico, seguido de apresentação dos pilares da empresa, seções de atalho para os dois grandes grupos (Ar-Condicionado e Refrigeração), marcas atendidas e botão de conversão rápida.
- [ ] **AC-05.02:** A página `/ar-condicionado` e suas subpáginas (`/instalacao` e `/manutencao-limpeza`) devem apresentar conteúdo técnico aprofundado, listando modelos aceitos (split, inverter, cassete), benefícios do vácuo e da recarga correta de fluido.
- [ ] **AC-05.03:** A página `/refrigeracao` e suas subpáginas (`/geladeiras-freezers` e `/chopeiras-bebedouros`) devem detalhar defeitos comuns resolvidos (troca de compressor, conserto de placa eletrônica, eliminação de vazamentos, regulagem de temperatura).
- [ ] **AC-05.04:** Todas as páginas devem possuir hierarquia estrita de headings: um único `<h1>`, seguido de `<h2>` para divisões temáticas e `<h3>` para blocos/cards.

### Task: Páginas Institucionais (Sobre, Áreas Atendidas, FAQ, Contato)
- [ ] **AC-05.05:** A página `/areas-atendidas` deve listar os bairros e condomínios de Nova Lima (Alphaville, Vila da Serra, Vale do Sereno, etc.) e cidades vizinhas com texto explicativo útil e links internos para os serviços.
- [ ] **AC-05.06:** A página `/sobre` deve unificar os dados institucionais, destacando experiência da equipe, peças originais e garantia formal de 90 dias, sem inventar fatos ou números inverificáveis.
- [ ] **AC-05.07:** A página `/contato` deve apresentar o endereço físico completo, horários de funcionamento, botão de ligação direta, mapa do Google integrado e botão de envio direto para WhatsApp.
- [ ] **AC-05.08:** A página `/perguntas-frequentes` deve fornecer acordeão funcional para responder dúvidas sobre formas de pagamento, garantia, atendimento no mesmo dia e marcas aceitas.

---

## 5. Fase 06 — SEO Local, Conversão e Contato

### Task: Centralização de NAP e Sincronização
- [ ] **AC-06.01:** Deve existir o arquivo `src/app/core/constants/business-info.ts` exportando objeto tipado com todas as informações oficiais da Alves Refrigeração.
- [ ] **AC-06.02:** Todos os componentes visíveis que exibem telefone, WhatsApp, e-mail, CNPJ e endereço devem consumir este arquivo de constantes.
- [ ] **AC-06.03:** Qualquer inconsistência encontrada no código legado (como "Vila São Luís" ou e-mail "contato.com") deve ser totalmente extirpada.

### Task: Otimização de Conversão e Links Diretos
- [ ] **AC-06.04:** Todos os botões com ação de WhatsApp devem apontar para `https://wa.me/5531992855049` com mensagem URI-encoded contextualizada com a página ou serviço em foco.
- [ ] **AC-06.05:** O botão flutuante de emergência deve permanecer acessível e utilizável em telas móveis sem obstruir textos de leitura ou botões de navegação.
- [ ] **AC-06.06:** O link para rota no Google Maps deve apontar para o link verificado da empresa (`https://maps.app.goo.gl/UADJTLrkyTNvfMT28`).

---

## 6. Fase 07 — Auditoria Automatizada, Testes e Qualidade

### Task: Script de Auditoria SEO Automatizada (`npm run seo:audit`)
- [ ] **AC-07.01:** O comando `npm run seo:audit` deve ser configurado no `package.json` e executável via linha de comando local.
- [ ] **AC-07.02:** O script deve inspecionar os arquivos HTML pré-renderizados na pasta de build (`dist/cli_ar/browser/`) e validar:
  1. Presença de `<title>` único e ≤ 60 caracteres em cada rota.
  2. Presença de `<meta name="description">` entre 70 e 160 caracteres em cada rota.
  3. Presença de exatamente um tag `<h1>` por arquivo indexável.
  4. Presença de `<link rel="canonical">` absoluto em cada rota.
  5. Presença de `<script type="application/ld+json">` válido com `@type: "HVACBusiness"`.
  6. Ausência total de campos `aggregateRating` no JSON-LD.
  7. Ausência de imagens com tamanho superior a 300 kB no diretório de saída.
  8. Presença e validade dos arquivos `robots.txt` e `sitemap.xml`.
- [ ] **AC-07.03:** Se qualquer uma das validações falhar, o script deve sair com código de erro diferente de zero (`process.exit(1)`), garantindo que o pipeline de qualidade acuse a falha.

### Task: Suíte de Testes Unitários e Build
- [ ] **AC-07.04:** A execução de `npm test -- --watch=false` deve executar com 100% dos testes unitários passando (verde), cobrindo o serviço de SEO, formatação de links WhatsApp e integridade de constantes do negócio.
- [ ] **AC-07.05:** O comando `npm run build` deve compilar sem nenhum aviso de erro impeditivo de bundle ou quebra de SSR.
