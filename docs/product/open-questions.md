# Registro de Dúvidas Abertas e Decisões Seguras (Open Questions)

> Versão: 1.0 (2026-11-06)  
> Diretriz do Harness: Não paralisar o fluxo por ambiguidades resolúveis; aplicar defaults seguros que protejam a credibilidade e o compliance do produto.

---

## 1. Mapeamento de Dúvidas e Defaults Adotados

| ID | Tema | Ambiguidade Encontrada no Código / Baseline | Impacto | Decisão Segura Adotada (Default Operacional) | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OQ-01** | **Tempo de Experiência da Empresa** | O arquivo `sobre.component.html` cita *"Há mais de 10 anos"*, enquanto `sobre.component.ts` declara no array de estatísticas `"2+ Anos de experiência"`. | Médio (E-E-A-T e Prova de Verdade) | **Não declarar número estático duvidoso.** Utilizar no texto termos institucionais verdadeiros como *"Equipe técnica qualificada e experiente"*, enfatizando o diferencial inquestionável da **garantia formal de 90 dias** e o CNPJ registrado. | `ADOTADO (DEFAULT SEGURO)` |
| **OQ-02** | **Bairro do Endereço Sede (NAP)** | O arquivo `contato.component.html` cita *"Vila São Luís"*, enquanto o embed do Google Maps e a base oficial de CEP dos Correios (34002-184) apontam *"Vila Padre Valeriano"*. | Alto (SEO Local / NAP Consistente) | **Adotar estritamente "Vila Padre Valeriano"** em todo o site, constantes e JSON-LD, pois é a designação homologada pelos Correios e pelo Google Maps para a Rua Professora Anésia de Matos Guimarães, 80 B. | `ADOTADO (DEFAULT SEGURO)` |
| **OQ-03** | **E-mail de Contato** | O arquivo `contato.component.html` exibe o texto truncado `contato.com`, enquanto a SPEC e o JSON-LD informam `alvesrefrigeracaomg@gmail.com`. | Alto (Canal de Atendimento) | **Adotar `alvesrefrigeracaomg@gmail.com`** como fonte única de e-mail institucional e eliminar qualquer referência a "contato.com". | `ADOTADO (DEFAULT SEGURO)` |
| **OQ-04** | **Política de Taxa de Visita Técnica** | O site não explicita se a visita técnica para diagnóstico de equipamentos pesados (como ar-condicionado ou geladeira) possui taxa de deslocamento ou se é gratuita. | Médio (Conversão e Alinhamento com Cliente) | **Adotar o texto: *"Orçamento prévio rápido via WhatsApp e agendamento de visita técnica no seu local"*.** Não prometer visita gratuita universal sem confirmação do proprietário, evitando atrito comercial. | `ADOTADO (DEFAULT SEGURO)` |
| **OQ-05** | **Áreas Atendidas e Raio de Deslocamento** | A SPEC e arquivos citam Nova Lima, Raposos, Rio Acima, Betim e Contagem, mas distâncias para Betim/Contagem exigem deslocamento expressivo. | Médio (Viabilidade Operacional) | **Definir Nova Lima e bairros nobres contíguos (Vila da Serra, Belvedere/BH, Vale do Sereno, Alphaville) como área primária imediata.** Raposos, Rio Acima e demais municípios da Grande BH são listados com a nota informativa *"Consulte disponibilidade e agendamento para sua região via WhatsApp"*. | `ADOTADO (DEFAULT SEGURO)` |
| **OQ-06** | **Link do Google Perfil da Empresa (Google Maps)** | O embed do mapa aponta para coordenadas geográficas específicas e existe um link encurtado nos botões (`https://maps.app.goo.gl/UADJTLrkyTNvfMT28`). | Baixo (Experiência do Usuário) | **Manter o link encurtado verificado** nos botões de "Abrir no Google Maps" e centralizá-lo em `business-info.ts`. | `ADOTADO (DEFAULT SEGURO)` |

---

## 2. Instruções para o Proprietário do Negócio
Caso o proprietário da Alves Refrigeração deseje atualizar qualquer um dos itens acima (por exemplo, confirmar o ano exato de registro da empresa ou formalizar a política de visita técnica gratuita para bairros centrais), bastará ajustar as constantes em `src/app/core/constants/business-info.ts` sem que haja necessidade de refatoração estrutural da aplicação.
