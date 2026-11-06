# Especificação de Requisitos de Produto (RFs e RNFs)

> Versão: 1.0 (2026-11-06)  
> Sistema: Homepage e Hub de Climatização Alves Refrigeração  
> Padrão: Angular 19 SSR / Prerender, Clean Architecture Agnóstica

---

## 1. Requisitos Funcionais (RF)

- **RF-01 (Navegação Multi-Páginas Indexáveis):**  
  O sistema deve fornecer rotas navegáveis independentes (`/`, `/ar-condicionado`, `/ar-condicionado/instalacao`, `/ar-condicionado/manutencao-limpeza`, `/refrigeracao`, `/refrigeracao/geladeiras-freezers`, `/refrigeracao/chopeiras-bebedouros`, `/areas-atendidas`, `/sobre`, `/contato`, `/perguntas-frequentes`), renderizadas através de `<router-outlet>`.

- **RF-02 (Gerenciamento Dinâmico de Metadados de SEO):**  
  Cada rota da aplicação deve atualizar dinamicamente no momento da renderização do SSR o elemento `<title>` (≤ 60 caracteres), a meta tag `<meta name="description">` (70–160 caracteres) e a tag canônica `<link rel="canonical" href="...">`.

- **RF-03 (Metadados Open Graph e Twitter Cards):**  
  Toda página deve possuir tags Open Graph completas (`og:title`, `og:description`, `og:url`, `og:image`, `og:type="website"`, `og:locale="pt_BR"`), onde a URL da imagem deve ser absoluta.

- **RF-04 (Injeção Dinâmica de Schema JSON-LD):**  
  O sistema deve injetar em cada rota o bloco `<script type="application/ld+json">` contendo o schema `HVACBusiness` sincronizado com os dados institucionais oficiais, além de schemas complementares por rota (`Service`, `BreadcrumbList`, `FAQPage`).

- **RF-05 (Botão de Conversão WhatsApp Contextualizado):**  
  Os botões de CTA e modais de WhatsApp devem gerar links diretos para a API do WhatsApp (`https://wa.me/5531992855049?text=...`) com mensagem pré-formatada contendo o nome do serviço ou página de origem (ex: *"Olá! Gostaria de um orçamento para instalação de ar-condicionado em Nova Lima."*).

- **RF-06 (Botão Flutuante de Emergência / Ligação):**  
  O componente de contato rápido deve permitir chamada telefônica imediata via link nativo `tel:+5531992855049` em dispositivos móveis.

- **RF-07 (Navegação Estruturada Breadcrumbs):**  
  As páginas internas devem exibir componente visual de breadcrumbs que espelhe a hierarquia definida na arquitetura de informação e reproduza a estrutura correspondente em JSON-LD (`BreadcrumbList`).

- **RF-08 (Hub de Perguntas Frequentes Interativo):**  
  A página `/perguntas-frequentes` deve disponibilizar acordeão acessível com perguntas e respostas categorizadas por serviço (Ar-Condicionado, Geladeiras, Garantia, Pagamentos).

- **RF-09 (Exibição de Diferenciais e Marcas):**  
  As páginas de serviços e a página Sobre devem exibir lista clara de marcas atendidas (Daikin, LG, Samsung, Midea, Carrier, Brastemp, Electrolux, Consul, etc.) e os pilares de atendimento (90 dias de garantia, peças originais, agilidade).

- **RF-10 (Mapa e Localização Física):**  
  A página de contato deve exibir iframe otimizado com lazy loading para a localização da empresa no Google Maps e link direto para rota no Google Maps app.

- **RF-11 (Geração de Sitemap XML e Robots.txt):**  
  O sistema de build/distribuição deve disponibilizar `/sitemap.xml` atualizado com todas as rotas públicas canônicas e `/robots.txt` apontando para a URL absoluta do sitemap.

- **RF-12 (Página 404 Amigável):**  
  Qualquer rota não reconhecida deve carregar componente amigável de erro 404, contendo mensagem clara, links de retorno à home e metatag `<meta name="robots" content="noindex, follow">`.

- **RF-13 (Rodapé Informativo Unificado):**  
  O rodapé da aplicação deve consolidar o NAP da empresa, links para todas as páginas de serviços, áreas atendidas, horários de funcionamento, CNPJ e link para canais de atendimento direto.

- **RF-14 (Tratamento de Contato Sem Backend):**  
  Na página de contato, a ação de envio deve abrir diretamente o WhatsApp com os campos preenchidos (nome, serviço de interesse, bairro), eliminando a tentativa de persistência em API inexistente.

- **RF-15 (Prova Social Confiável):**  
  As avaliações e depoimentos apresentados no site devem ser representados como citações honestas de clientes reais sem marcação de snippet autodeclarado no JSON-LD.

---

## 2. Requisitos Não-Funcionais (RNF)

- **RNF-01 (Indexabilidade Total via SSR e Prerender):**  
  100% do conteúdo textual relevante e das tags semânticas (`<h1>`, `<h2>`, `<p>`, `<a>`) devem estar presentes no HTML entregue pelo servidor antes da execução de scripts no cliente. É expressamente proibido ocultar o conteúdo principal com loaders ou spinners que dependam de JavaScript no browser.

- **RNF-02 (Performance de Carregamento — Core Web Vitals):**  
  A aplicação deve atingir em ambiente de produção:
  - **LCP (Largest Contentful Paint):** < 2,5 segundos em conexões 4G móvel.
  - **CLS (Cumulative Layout Shift):** < 0,1 em todas as rotas.
  - **INP (Interaction to Next Paint):** < 200 milissegundos.

- **RNF-03 (Otimização Extrema de Imagens):**  
  Nenhum arquivo de imagem servido pelo site deve exceder o tamanho de **300 kB**. Todas as imagens de conteúdo devem ser convertidas para o formato moderno **WebP**, possuir atributos explícitos `width` e `height` no HTML e utilizar `loading="lazy"` para imagens abaixo da dobra.

- **RNF-04 (Autossuficiência de Fontes Tipográficas):**  
  Fontes tipográficas (Inter e Poppins) devem ser servidas localmente através dos pacotes `@fontsource` com declaração CSS `font-display: swap`, eliminando chamadas síncronas a servidores externos do Google Fonts.

- **RNF-05 (Conformidade com Diretrizes do Google Search Essentials):**  
  - Título único por página com comprimento de até 60 caracteres.
  - Meta description única por página entre 70 e 160 caracteres.
  - Exatamente um `<h1>` semântico por página indexável.
  - Proibição absoluta de técnicas de Black-Hat (keyword stuffing, cloaking, texto oculto, doorway pages).

- **RNF-06 (Conformidade de Dados Estruturados Schema.org):**  
  Os scripts JSON-LD devem validar com zero erros na ferramenta de Rich Results do Google e no Schema Markup Validator. É proibida a marcação de `aggregateRating` no tipo `LocalBusiness` ou `HVACBusiness`.

- **RNF-07 (Consistência Absoluta de NAP):**  
  Nome empresarial, endereço físico, CEP, telefone e e-mail devem ser lidos de uma única fonte de verdade de constantes (`src/app/core/constants/business-info.ts`), garantindo consistência em todas as páginas e nos schemas JSON-LD.

- **RNF-08 (Design Responsivo e Mobile-First):**  
  O layout deve se adaptar com perfeição em telas desde 320px até 4K, garantindo legibilidade e usabilidade tátil sem rolagem horizontal indesejada.

- **RNF-09 (Acessibilidade Digital — WCAG 2.1 Nível AA):**  
  - Relação de contraste mínima de 4.5:1 para textos convencionais.
  - Atributos `alt` descritivos em todas as imagens com valor informativo; `alt=""` para imagens puramente decorativas.
  - Elementos interativos focalizáveis por teclado com contorno de foco visível.

- **RNF-10 (Segurança e Privacidade):**  
  - Comunicação estritamente forçada via HTTPS.
  - Ausência de segredos, credenciais ou tokens no código-fonte do frontend.
  - Abertura de links externos com atributos seguros `rel="noopener noreferrer"`.

- **RNF-11 (Auditoria Automatizada no Pipeline de CI):**  
  O repositório deve contar com script de validação de SEO (`npm run seo:audit`) executável sem intervenção humana, validando tags mandatórias, sintaxe JSON-LD, integridade do sitemap e tamanho máximo de imagens.

- **RNF-12 (Limpeza de Dependências Obsoletas):**  
  Dependências JavaScript legadas (ex: jQuery e scripts que forçam manipulação manual de DOM) devem ser isoladas ou removidas sem regressão funcional, priorizando primitivas nativas do Angular 19.
