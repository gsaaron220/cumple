import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist'
  }
})
```

### 1.3 Renombrar tu HTML
- Si tu archivo HTML no se llama `index.html`, **renómbralo** a `index.html`
- Debe estar en la **raíz** del proyecto

---

## 📁 Estructura final del proyecto
```
cumple/
├── index.html          ← Tu página (renombrada si es necesario)
├── package.json        ← NUEVO
├── vite.config.js      ← NUEVO
├── assets/
│   ├── preguntas.json
│   └── resultados.json (se creará automáticamente)
└── fotos/             (se creará automáticamente)
