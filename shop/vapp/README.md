# Videos app

The "Watch videos" overlay loads this folder. It's the blob video app.

Only the data source and branding are changed:
- `projects.json`: the blobs. Each entry has title, date, category, description (`info`), credits, an Instagram link (`upcoming`), and the clip files (`previewUrl` = small loop, `vimeoLink` = full clip, `thumbnailUrl` = still).
- `index.json`: the Index page.
- `info.json` and `contact.json`: the Info and Contact pages.

The app's behaviour is unchanged. "Watch videos" on the main site opens it as a page, and browser Back returns.
