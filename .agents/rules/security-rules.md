---
trigger: always_on
description: Diretrizes de segurança para site estático/SSR, proteção de segredos e privacidade.
---

# Regras de Segurança e Proteção de Dados

## 1. Segredos
1. Proibido versionar tokens, chaves de API, credenciais de deploy ou de Search Console.
2. Configurações sensíveis via variáveis de ambiente / GitHub Secrets.
3. Códigos de verificação públicos (ex: `google-site-verification`) são permitidos por natureza.

## 2. Front-end
1. **XSS:** proibido `innerHTML`/`bypassSecurityTrust*` com dados não confiáveis. JSON-LD deve ser injetado via `DOCUMENT` + `textContent` com `JSON.stringify`.
2. **Links externos:** `rel="noopener noreferrer"` com `target="_blank"`.
3. **Mensagens ao WhatsApp:** sempre `encodeURIComponent`.
4. **Servidor Express (SSR):** não expor stack traces; manter `express.static` restrito à pasta `browser`.

## 3. Privacidade (LGPD)
1. Não coletar dados pessoais sem finalidade e aviso.
2. Scripts de terceiros (analytics) somente com ADR e aviso de privacidade.
