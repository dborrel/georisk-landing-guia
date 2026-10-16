# GEORISK – landing + guía de usuario (mini)

Local:
    npm install
    npm run dev          # http://localhost:5173  (/ y /user-guide)

Render (Static Site):
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`
- Rewrite: Source `/*` → Destination `/index.html` (Redirects/Rewrites). Ya incluido en `render.yaml`.

Las rutas /login y /register muestran un aviso (no hay backend en esta versión).
