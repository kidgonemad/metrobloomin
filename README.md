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
- The "Se filmer" drawer shows Instagram embeds instead of the original YouTube episodes.
- English is the default language (other languages via the menu or `/nb/`, `/ar/`, ...).
- The front-page brain is tinted pink (#F2A0BC).
- The cannabis leaf on the front-page brain is replaced by a 3D cartoon leaf (`leaf-cartoon-3d.glb`, front art `leaf-cartoon-face.jpg`), extruded from the drawing's outline. The leaf painted into the brain texture is replaced by a plain one (`brain-texture-plain.jpg`).
