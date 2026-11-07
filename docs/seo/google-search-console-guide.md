# Guia de Configuração e Monitoramento — Google Search Console

> Sistema: Alves Refrigeração Homepage (Angular 19 SSR / Prerender)  
> Domínio Canônico: `https://alvesrefrigeracao.com.br`  
> Objetivo: Garantir Indexação Rápida e Monitorar Performance Orgânica

---

## 1. Verificação da Propriedade no Search Console

O site já possui a meta tag de verificação instalada no arquivo `src/index.html`:
```html
<meta name="google-site-verification" content="Fdw-H-7AJ6-33Y8EC7uAW8vJErMlSS7PFBZMrl_OIGk" />
```

### Métodos Recomendados para Verificação:
1. **Verificação por Prefixo de URL (Via Meta Tag HTML):**  
   - Acesse [search.google.com/search-console](https://search.google.com/search-console).
   - Insira `https://alvesrefrigeracao.com.br` no campo "Prefixo do URL".
   - Escolha o método "Tag HTML". Como a tag já está presente no código, clique em "Verificar".
2. **Verificação de Domínio Completo via Registro DNS (Método Ideal de Longo Prazo):**  
   - Selecione a opção "Domínio" e insira `alvesrefrigeracao.com.br`.
   - Adicione o registro TXT fornecido pelo Google na zona de DNS do registrador de domínio (ex: Registro.br, Cloudflare ou cPanel).
   - Garante a cobertura de todos os subdomínios e protocolos (`http`, `https`, `www`).

---

## 2. Envio e Validação do Sitemap XML

A aplicação gera automaticamente no build o arquivo canônico em `src/sitemap.xml`, contendo as 11 rotas públicas da arquitetura de informação.

### Passo a Passo para Envio:
1. No menu lateral esquerdo do Search Console, clique em **Sitemaps** (em "Indexação").
2. No campo "Adicionar novo sitemap", digite: `sitemap.xml`.
3. Clique em **Enviar**.
4. Verifique o status: deve constar como **"Sucesso"** em verde e indicar a descoberta de **11 páginas**.
5. Se constar erro temporário de leitura, aguarde alguns minutos e reenvie.

---

## 3. Inspeção e Solicitação Prioritária de Indexação

Como o site foi reconstruído com pré-renderização completa (eliminando o spinner que bloqueava o HTML no SSR), o Googlebot precisa rastrear as novas páginas renderizadas imediatamente.

### Ação Recomendada:
Para cada uma das 11 rotas canônicas abaixo, utilize a barra de busca superior do Search Console ("Inspecionar qualquer URL em..."):

1. `https://alvesrefrigeracao.com.br/`
2. `https://alvesrefrigeracao.com.br/ar-condicionado`
3. `https://alvesrefrigeracao.com.br/ar-condicionado/instalacao`
4. `https://alvesrefrigeracao.com.br/ar-condicionado/manutencao-limpeza`
5. `https://alvesrefrigeracao.com.br/refrigeracao`
6. `https://alvesrefrigeracao.com.br/refrigeracao/geladeiras-freezers`
7. `https://alvesrefrigeracao.com.br/refrigeracao/chopeiras-bebedouros`
8. `https://alvesrefrigeracao.com.br/areas-atendidas`
9. `https://alvesrefrigeracao.com.br/sobre`
10. `https://alvesrefrigeracao.com.br/contato`
11. `https://alvesrefrigeracao.com.br/perguntas-frequentes`

Após inspecionar a URL:
- Clique em **"Testar o URL publicado"** (Live Test).
- Verifique se a captura de tela (Screenshot) exibe todo o texto da página sem o loader bloqueante.
- Verifique a aba "HTML" para assegurar que a tag `<h1>` e os parágrafos estão visíveis.
- Clique no botão **"Solicitar indexação"**.

---

## 4. Monitoramento do Relatório de Desempenho (Search Performance)

Acompanhe semanalmente as métricas de tráfego orgânico sem anúncios:

- **Total de Cliques:** Número de pessoas que clicaram para acessar o site.
- **Total de Impressões:** Quantas vezes o site apareceu nos resultados para buscas em Nova Lima e região.
- **CTR Médio (Taxa de Cliques):** Relação entre cliques e impressões (alvo: > 4,0% para buscas com intenção local).
- **Posição Média:** Posição orgânica para palavras-chave prioritárias.

### Consultas Prioritárias a Monitorar:
- `ar condicionado nova lima`
- `instalação ar condicionado nova lima`
- `manutenção ar condicionado nova lima`
- `conserto geladeira nova lima`
- `conserto chopeira nova lima`
- `alves refrigeração`

---

## 5. Relatório de Páginas e Cobertura (Indexação)

Inspecione periodicamente a aba **Indexação > Páginas**:
- **Páginas Indexadas:** Devem estabilizar em exatamente **11 páginas**.
- **Páginas Não Indexadas:** Verificar os motivos listados pelo Google:
  - *"Rastreada, mas não indexada no momento"*: Se ocorrer, realizar novo teste em tempo real e solicitar reindexação.
  - *"Não encontrada (404)"*: Confirmar que rotas antigas ou URLs inexistentes respondem com o componente 404 amigável e meta tag `noindex`.
  - *"Excluída pela tag noindex"*: Esperado apenas para a página 404.

---

## 6. Validação de Dados Estruturados e Resultados Aprimorados (Rich Results)

Acesse a seção **Aprimoramentos** no Search Console para auditar as marcações injetadas pelo Angular SSR:
- **Trilhas de Navegação (Breadcrumbs):** Deve apresentar 0 erros e 10 páginas com trilha válida.
- **Páginas de Perguntas Frequentes (FAQ):** A rota `/perguntas-frequentes` deve validar com sucesso o tipo `FAQPage`, habilitando respostas expansíveis no resultado do Google.
- **HVACBusiness:** Garantir ausência total de avisos de `aggregateRating` ou reviews faltantes (em total conformidade com a política anti-spam do Google).

---

## 7. Métricas Essenciais da Web (Core Web Vitals)

Verifique mensalmente o relatório **Experiência > Core Web Vitals**:
- **Mobile (Dispositivos Móveis):** Todas as URLs devem estar na faixa verde (**"Bom"**):
  - LCP ≤ 2,5 s
  - INP ≤ 200 ms
  - CLS ≤ 0,1
- Com as imagens convertidas para WebP (< 300 kB) e fontes locais self-hosted com `font-display: swap`, a aplicação mantém pontuação máxima de performance.
