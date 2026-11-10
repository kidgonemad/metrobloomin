# Videos app

The "Watch videos" overlay loads this folder. It's the Emma Portner site's blob video app, used with permission.

Only the data source and branding are changed:
- `projects.json`: the blobs. Each entry has title, date, category, description (`info`), credits, an Instagram link (`upcoming`), and the clip files (`previewUrl` = small loop, `vimeoLink` = full clip, `thumbnailUrl` = still).
- `index.json`: the Index page.
- `info.json` and `contact.json`: the Info and Contact pages.

The app's menu has a Close item (route `/close`), which the site uses to close the overlay.
