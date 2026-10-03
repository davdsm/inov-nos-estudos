# Inov@ nos Estudos

Site do centro de estudo em Gemunde (Maia, Portugal). Migrado do pacote de produção Design.com para React + Vite, sem alterações visuais.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## SEO e partilhas

A imagem de partilha (WhatsApp, Facebook, etc.) é `public/og-image.jpg` — screenshot do início do site em **1920×1080**.

Define a URL canónica em `.env` (sem barra final):

```bash
VITE_SITE_URL=https://teu-dominio.pt
```

Sem esta URL absoluta, as pré-visualizações sociais podem não mostrar a imagem corretamente.

## Stack

- React 19
- Vite
- React Router
- Design system próprio (tokens + Button, Input, Select, RingFrame, PersonaCard)
