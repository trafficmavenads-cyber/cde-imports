# CDE Imports — Landing Page

Site estático pronto para publicar gratuitamente no **GitHub Pages**.

## Arquivos

- `index.html` — página principal
- `styles.css` — layout, responsividade e paleta
- `script.js` — WhatsApp, menu mobile e eventos
- `assets/` — logo e imagens reais dos produtos
- `.nojekyll` — evita processamento do Jekyll no GitHub Pages
- `site-preview.png` — referência visual do layout aprovado

## Publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo: `cde-imports`.
2. Envie **todos os arquivos desta pasta**, mantendo a pasta `assets`.
3. No repositório, abra `Settings` → `Pages`.
4. Em **Build and deployment**, selecione `Deploy from a branch`.
5. Em `Branch`, escolha `main` e pasta `/ (root)`.
6. Clique em `Save`.
7. Após alguns minutos, o GitHub mostrará a URL publicada.

## WhatsApp

O site usa o link:

`https://wa.me/message/I73W2OYLCHD3M1`

Mensagens específicas são definidas pelo atributo `data-msg` nos botões.

## Analytics

O JavaScript já dispara nomes de eventos no `dataLayer` e, se presentes, também envia para `fbq` e `gtag`:

- `page_view`
- `whatsapp_click`
- `table_request`
- `wholesale_lead`
- `retail_lead`
- `professional_lead`
- `product_interest`

IDs de Meta Pixel, GA4 e GTM não foram inventados. Eles podem ser adicionados depois.
