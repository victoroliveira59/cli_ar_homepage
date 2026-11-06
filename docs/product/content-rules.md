# Regras de Conteúdo, Diretrizes E-E-A-T e Políticas Anti-Spam

> Versão: 1.0 (2026-11-06)  
> Diretriz: Conformidade Estrita com as Políticas de Qualidade do Google Search Essentials

---

## 1. Fonte Única da Verdade para Dados Cadastrais (NAP)

Todos os textos do site, metadados, links de contato e dados estruturados devem consumir obrigatoriamente a mesma definição cadastral centralizada (`business-info.ts`):

- **Nome Comercial:** Alves Refrigeração & Climatização
- **Razão Social / Identificação:** Alves Refrigeração - Assistência Técnica Especializada
- **CNPJ:** 62.273.642/0001-11
- **Logradouro:** Rua Professora Anésia de Matos Guimarães, 80 B
- **Bairro:** Vila Padre Valeriano (confirmado via CEP oficial dos Correios e Google Maps)
- **Cidade / UF / CEP:** Nova Lima - MG — CEP 34002-184
- **Telefone / WhatsApp:** (31) 99285-5049 (formato internacional: `+5531992855049`)
- **E-mail Oficial:** alvesrefrigeracaomg@gmail.com
- **Horário de Atendimento:** Segunda a Sexta, das 08:00 às 18:00 (Plantão emergencial aos sábados)
- **URL Canônica Oficial:** `https://alvesrefrigeracao.com.br`

> **Regra Mandatória:** É terminantemente proibido inserir variações manuais do endereço (como "Vila São Luís"), telefones secundários não homologados ou e-mails fictícios (como "contato.com") em qualquer componente ou página.

---

## 2. Diretrizes E-E-A-T (Experiência, Especialidade, Autoridade e Confiabilidade)

Como os serviços de climatização e refrigeração envolvem instalações elétricas, gases refrigerantes pressurizados e segurança patrimonial, o Google avalia sinais de qualidade técnica:

1. **Experiência Comprovada:**
   - Descrever procedimentos práticos reais realizados nos atendimentos (ex: teste de estanqueidade com nitrogênio, vácuo com vacuômetro digital abaixo de 500 microns, verificação de corrente e superaquecimento).
   - Apresentar com clareza os modelos atendidos: Split Hi-Wall, Multi-Split, Inverter, Cassete, Piso-Teto, Geladeiras Frost-Free, Freezers Horizontais e Verticais, Chopeiras a Gelo e Elétricas.

2. **Especialidade das Marcas:**
   - Citar as marcas que a empresa repara de acordo com o padrão técnico original (Daikin, Fujitsu, LG, Samsung, Midea, Carrier, Brastemp, Electrolux, Consul, etc.).
   - Nunca alegar ser "Autorizada Exclusiva" de uma marca a menos que exista contrato formal de credenciamento. Utilizar termos verdadeiros e precisos: *"Especializada multimarcas com peças originais e ferramentas dedicadas"*.

3. **Autoridade e Transparência Local:**
   - Reforçar a presença física em Nova Lima/MG.
   - Fornecer orientações preventivas e educativas para o usuário (ex: periodicidade ideal de limpeza de filtros de ar-condicionado, causas comuns de perda de refrigeração na geladeira).

4. **Confiabilidade:**
   - Garantia legal de 90 dias em serviços e peças substituídas destacada com clareza em todas as páginas de conversão.
   - Orçamento discriminado antes do início de qualquer reparo mecânico ou elétrico.

---

## 3. Políticas Anti-Spam e Práticas Proibidas (Zero Black-Hat)

Em total alinhamento com as regras do Google Search Essentials:

- **Proibido Keyword Stuffing:** É vedada a repetição não natural de palavras-chave como *"ar condicionado nova lima conserto nova lima empresa nova lima ar condicionado nova lima"*. O texto deve ser redigido para seres humanos com fluidez semântica.
- **Proibido Conteúdo Oculto (Hidden Text):** Nenhum texto pode ser renderizado com cor idêntica ao fundo, com tamanho zero, posicionado fora da tela via CSS (`left: -9999px`) ou coberto por camadas transparentes para enganar rastreadores.
- **Proibidas Doorway Pages (Páginas-Porta Repetitivas):** É proibido criar dezenas de páginas automáticas duplicadas trocando apenas o nome do bairro ou da cidade (ex: `/ar-condicionado-raposos`, `/ar-condicionado-rio-acima`, `/ar-condicionado-betim`) sem conteúdo técnico genuinely diferenciado. Toda a cobertura deve ser consolidada na rota `/areas-atendidas` e contextualizada no hub principal.
- **Proibido Review Spam / Schema Autodeclarado:** É expressamente vetada a inclusão de campos de avaliação como `aggregateRating` ou `review` no JSON-LD do site. Avaliações no site devem ser mostradas em texto limpo como depoimentos institucionais, sem enganar os algoritmos de snippets do Google.
- **Proibida Criação de Fatos Fictícios:** Não inventar número fictício de clientes atendidos, datas irreais de fundação da empresa ou certificações internacionais sem validação humana documentada.

---

## 4. Tom de Voz e Padronização Linguística

- **Idioma:** Português do Brasil (pt-BR) culto, porém acessível e dinâmico.
- **Tom de Voz:** Confiável, prestativo, técnico sem ser excessivamente prolixo, direto e seguro.
- **Estrutura de Frases:** Frases ativas, foco no benefício ao cliente (conforto térmico, economia de energia, prevenção de queima de compressor, retorno do frio na geladeira).
- **Tratamento do Cliente:** Uso de você, transmitindo respeito, cortesia e disponibilidade imediata.

---

## 5. Padrão de Chamadas para Ação (CTAs)

1. **Botões de Conversão Primária (WhatsApp):**
   - **Label padrão:** `Solicitar Orçamento no WhatsApp` ou `Falar com Técnico no WhatsApp`.
   - **Ícone:** WhatsApp (`fab fa-whatsapp`).
   - **Link formatado:** `https://wa.me/5531992855049?text=[Mensagem+Contextualizada]`.
   - **Exemplo de Parâmetro Contextualizado:**
     - Home: `Olá! Vim pelo site da Alves Refrigeração e gostaria de tirar uma dúvida.`
     - Instalação: `Olá! Gostaria de um orçamento para instalação de ar-condicionado em Nova Lima.`
     - Manutenção: `Olá! Preciso de manutenção ou recarga de gás em meu ar-condicionado.`
     - Geladeiras: `Olá! Minha geladeira/freezer está com defeito e preciso de atendimento urgente.`

2. **Botões de Ligação Telefônica:**
   - **Label padrão:** `Ligar Agora: (31) 99285-5049`.
   - **Ícone:** Telefone (`fas fa-phone-alt`).
   - **Link formatado:** `tel:+5531992855049`.
