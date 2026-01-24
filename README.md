# 🚀 Portafolio James

Un Portafolio moderno y responsivo construido con React, TypeScript, Vite y Tailwind CSS.

## ✨ Características

- 🎨 **Diseño moderno y minimalista** con estética técnica
- 🌓 **Modo oscuro/claro** con persistencia y detección automática
- ⚡ **Animaciones CSS personalizadas** (subrayado tipo código, cursor parpadeante)
- 🔷 **TypeScript** para mayor seguridad de tipos y mejor DX
- 📱 **Totalmente responsivo** (móvil, tablet, desktop)
- 🎯 **Optimizado para rendimiento** con Vite y tree-shaking
- 🧭 **Navegación suave** entre secciones
- ♿ **Accesible** siguiendo estándares WCAG

## 🛠️ Stack Tecnológico

### **Frontend Core**
- **React** 18.3.1 - UI library con hooks modernos
- **TypeScript** 5.5.3 - Tipado estático y mejor DX
- **Vite** 5.4.2 - Build tool ultra-rápido con HMR

### **Styling & Design**
- **Tailwind CSS** 3.4.1 - Utility-first CSS framework
- **PostCSS** 8.4.35 - CSS processing y autoprefixer
- **CSS Animations** - Keyframes personalizados para efectos

### **State & Context**
- **React Context API** - Manejo global del tema
- **localStorage** - Persistencia de preferencias

### **Icons & Assets**
- **Lucide React** 0.344.0 - Iconografía moderna y limpia

### **Code Quality**
- **ESLint** 9.9.1 - Linting y code standards
- **TypeScript ESLint** - Reglas específicas para TS

> 📖 **Ver documentación técnica completa**: [TECHNICAL_DOCS.md](./TECHNICAL_DOCS.md)

## 📋 Prerrequisitos

Asegúrate de tener instalado en tu sistema:

- **Node.js** (versión 18 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** o **yarn** (viene incluido con Node.js)
- **Git** - [Descargar aquí](https://git-scm.com/)

Para verificar que tienes Node.js instalado, ejecuta:
```bash
node --version
npm --version
```

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/jamesleonardomartinez/PortafolioJames.git
cd PortafolioJames
```

### 2. Instalar dependencias

```bash
# Con npm
npm install

# O con yarn
yarn install
```

### 3. Ejecutar en modo desarrollo

```bash
# Con npm
npm run dev

# O con yarn
yarn dev
```

El proyecto se ejecutará en `http://localhost:5173`

## 📜 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm run dev` o `yarn dev`
Inicia la aplicación en modo desarrollo.\
Abre [http://localhost:5173](http://localhost:5173) para verla en el navegador.

### `npm run build` o `yarn build`
Construye la aplicación para producción en la carpeta `dist`.\
Optimiza React para el mejor rendimiento.

### `npm run preview` o `yarn preview`
Previsualiza la build de producción localmente.

### `npm run lint` o `yarn lint`
Ejecuta ESLint para encontrar y arreglar problemas en el código.

### `npm run typecheck` o `yarn typecheck`
Ejecuta TypeScript para verificar tipos sin emitir archivos.

## 📁 Estructura del Proyecto

```
PortafolioJames/
├── public/                 # Archivos públicos estáticos
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   └── TechnicalSkills.tsx
│   ├── data/              # Datos estáticos
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── types/             # Definiciones de TypeScript
│   │   └── index.ts
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Punto de entrada
│   └── index.css          # Estilos globales
├── index.html             # Template HTML
├── package.json           # Dependencias y scripts
├── tailwind.config.js     # Configuración de Tailwind
├── vite.config.ts         # Configuración de Vite
└── README.md              # Este archivo
```

## 🔧 Configuración Adicional

### Variables de Entorno

Si necesitas configurar variables de entorno, crea un archivo `.env` en la raíz del proyecto:

```env
VITE_APP_TITLE=Portafolio James
VITE_API_URL=https://tu-api.com
```

### Personalización de Tailwind

Puedes personalizar los estilos editando `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Tus personalizaciones aquí
    },
  },
  plugins: [],
}
```

## 🚢 Despliegue

### Netlify
1. Ejecuta `npm run build`
2. Sube la carpeta `dist` a Netlify

### Vercel
1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente la configuración de Vite

### GitHub Pages
1. Instala `gh-pages`: `npm install --save-dev gh-pages`
2. Agrega a `package.json`:
   ```json
   "homepage": "https://tuusuario.github.io/PortafolioJames",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Ejecuta `npm run deploy`

## 🐛 Solución de Problemas

### Error: "Module not found"
```bash
# Limpia node_modules e instala de nuevo
rm -rf node_modules package-lock.json
npm install
```

### Error de puerto en uso
Si el puerto 5173 está en uso, Vite automáticamente usará el siguiente disponible, o puedes especificar uno:
```bash
npm run dev -- --port 3000
```

### Problemas con TypeScript
```bash
# Verifica los tipos
npm run typecheck
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**James Leonardo Martinez**
- GitHub: [@jamesleonardomartinez](https://github.com/jamesleonardomartinez)
- LinkedIn: [Tu LinkedIn](https://linkedin.com/in/tu-perfil)

---

⭐ ¡No olvides darle una estrella al proyecto si te gustó!
