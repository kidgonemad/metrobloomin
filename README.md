# Weedensenteret mirror

Static mirror of https://www.weedensenteret.no/ (Helsedirektoratet), published with the site owners' permission.

Built from a Safari webarchive plus the runtime assets the page loads (3D models, textures, Draco decoder).

## Changes from the original
- Asset paths are relative, so the site also works from a sub-path (e.g. GitHub Pages `/<repo>/`).
- Language pages (`nb`, `nn`, `smi`, `en`, `ar`, `so`, `ur`) are folders so direct links work without server rewrites.
- Google Tag Manager is removed, so the mirror doesn't send data to the owner's analytics.
- The futura-pt regular and medium fonts are self-hosted from the archive. The bold weight still loads from Adobe Fonts.

## Run locally
    python3 -m http.server 8000   # then open http://localhost:8000/
- The cannabis leaf on the front-page brain is reskinned with a cartoon leaf (`leaf-cartoon.png`). The leaf painted into the brain texture is replaced by a plain one (`brain-texture-plain.jpg`).
