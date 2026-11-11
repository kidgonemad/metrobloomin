# Working rules for this repo

## Before changing anything
- Ask the owner and get a yes before making changes, and again before pushing to `main` (the live site). Show what changed (screenshot or exact text) when asking.
- If a request is ambiguous, ask instead of guessing.

## Don't contradict or break existing code
Before editing, check that the change doesn't fight something that's already there:
1. **Search first.** Grep for every selector, id, class, function or variable you touch (`index.7d544b17.css`, `shop/*.css`, `shop/*.js`, both bundles `index.27c983a0.js` + `index.13139838.js`, `shop/vapp/**/index.html`). Know every rule that already targets it.
2. **No override stacking.** Don't add a new rule to beat an old one. Change or remove the old one so there is exactly one rule that decides each thing (colour, size, position, visibility).
3. **Removing code?** Check what else it was doing first. A block can carry unrelated rules (e.g. `#logo{width:auto}` lived inside the old phone-menu block; deleting the block cut off the wordmark).
4. **The original bundle needs some elements** (`#about`, `#videos`, `#shopLink`, `nav.menu`, `#logo`, …). Hide them, never delete them.
5. **Test the real conditions**, not only the first second: let the 3D page finish loading (it switches `body` to the `dark` theme), then test every view (about / shop / videos) and switching between them, on phone (iPhone 13) and desktop sizes. Read computed styles, not just class names.
6. **Bump the `?v=` cache tags** in `index.html` / `404.html` (and `shop/vapp/**` for `mbnav`) when CSS/JS changes, or phones keep the old copy.

## Site structure (one page)
- `index.html` = about (the interactive 3D page). Opens on the shop.
- `shop/shop.js` = the shop layer + the single view controller `MBView.show('about'|'shop'|'videos')`.
- `shop/videos.js` = videos layer (iframe of `shop/vapp/`).
- `shop/mbnav.js` + `shop/mbnav.css` = the **only** menu, used on every view. Colour only via `data-tone` (`light` / `dark`).
- The original `nav.menu` and side `.content-menu` are hidden; don't restyle them.
