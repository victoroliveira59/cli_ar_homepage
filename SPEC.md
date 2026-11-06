# SPEC — Homepage Alves Refrigeração & Climatização

> Documento base de especificação. Fonte primária para o Analista. Versão 1.0 (2026-11-06).

## 1. Contexto
- **Negócio:** Alves Refrigeração — empresa de climatização e refrigeração (ar-condicionado residencial/comercial, geladeiras, freezers, chopeiras e bebedouros).
- **Localização (NAP oficial):** Rua Professora Anésia de Matos Guimarães, 80 B — Nova Lima/MG — CEP 34002-184. Telefone/WhatsApp: (31) 99285-5049. E-mail: alvesrefrigeracaomg@gmail.com. CNPJ 62.273.642/0001-11.
- **Domínio oficial presumido:** `https://alvesrefrigeracao.com.br` (já declarado no JSON-LD atual).
- **Stack atual:** Angular 19 standalone, SSR/prerender (`@angular/ssr`), Express, Bootstrap 4, Font Awesome, ngx-slick-carousel.

## 2. Objetivo de Produto
Transformar a homepage em um site **profissional de empresa de climatização** com **máximo alcance orgânico no Google sem tráfego pago**, priorizando:
1. **Indexabilidade total:** todo conteúdo relevante presente no HTML pré-renderizado (hoje bloqueado por spinner de 2s com `*ngIf`).
2. **SEO local:** Google Search + Google Maps/Business Profile para Nova Lima e região metropolitana de BH.
3. **Arquitetura de páginas indexáveis:** uma URL por intenção de busca (serviços, áreas atendidas, FAQ, contato) com title/description/canonical únicos.
4. **Dados estruturados válidos:** `HVACBusiness`/`LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList` — sem avaliações autodeclaradas.
5. **Core Web Vitals:** imagens otimizadas (há PNGs de ~8 MB), fontes self-hosted, LCP rápido.
6. **Conversão:** CTAs claros (WhatsApp/ligar), NAP consistente, prova social honesta.
7. **Qualidade:** suíte de testes verde, auditoria SEO automatizada no CI.

## 3. Fora de Escopo
- Tráfego pago (Google Ads, Meta Ads).
- Backend/CMS, blog dinâmico, formulários com persistência.
- Deploy em produção (exige aprovação humana).
- Criação/gestão do Perfil da Empresa no Google (entregue apenas como guia operacional).

## 4. Restrições
- Sem novas dependências pesadas sem ADR.
- Conteúdo deve ser verdadeiro: não inventar anos de mercado, número de clientes, certificações ou avaliações.
- Textos ao cliente em pt-BR.
