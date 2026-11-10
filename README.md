# Metro Bloomin

Interactive cannabis guide + shop for Metro Bloomin (est. 2016).

Based on Weedensenteret (https://www.weedensenteret.no/) by Helsedirektoratet, used with the owners' permission,
rebranded for Metro Bloomin with a shop section built from metrobloomin.com.

## What's here
- **Shop**: "Shop" in the top menu (or `#shop` in the URL) opens the shop: Classic and QRÖME collections.
  Each product links to its page on metrobloomin.com for checkout. Products and prices live in `shop/shop.js`; images are in `shop/img/`.
- **Branding**: Metro Bloomin title, headline, leaf logo, favicon and About text. Helsedirektoratet branding, contact details and the cookie banner are removed.
- **3D**: the front-page brain is pink with a 3D cartoon leaf (`leaf-cartoon-3d.glb`, front art `leaf-cartoon-face.jpg`).
- **Videos**: "Watch videos" shows Instagram embeds.
- **Language**: English by default; other languages via the menu or `/nb/`, `/ar/`, ...

## Run locally
    python3 -m http.server 8000   # then open http://localhost:8000/
