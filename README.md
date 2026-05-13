# 🛒 Tiendita React ❤️

Proyecto de una tienda online simple creada con **React + Vite**.

---

# 🚀 Instalación y Ejecución

## 📋 Requisitos

Necesitas tener instalado:

- Git
- Node.js (versión 18 o superior)

---

# 📥 PASO 1: Clonar el Proyecto

Abre una terminal y ejecuta:

```bash
git clone https://github.com/tuusuario/tu-repositorio.git
```

---

# 📂 PASO 2: Entrar a la Carpeta

```bash
cd codespaces-react
```

---

# 📦 PASO 3: Instalar Dependencias

```bash
npm install
```

---

# ▶️ PASO 4: Ejecutar el Proyecto

```bash
npm run dev
```

---

# 🌐 PASO 5: Abrir en el Navegador

Abre:

```text
http://localhost:3000
```

---

# 🪟 Instalación en Windows

## 1. Instalar Node.js

Descarga e instala Node.js desde:

https://nodejs.org

---

## 2. Instalar Git

Descarga Git desde:

https://git-scm.com

---

## 3. Abrir CMD o PowerShell

Ejecutar:

```bash
git clone https://github.com/tuusuario/tu-repositorio.git
cd codespaces-react
npm install
npm run dev
```

---

# 🐧 Instalación en Linux

## Ubuntu / Debian

### Instalar Node.js y Git

```bash
sudo apt update
sudo apt install nodejs npm git -y
```

### Clonar proyecto

```bash
git clone https://github.com/tuusuario/tu-repositorio.git
```

### Entrar a la carpeta

```bash
cd codespaces-react
```

### Instalar dependencias

```bash
npm install
```

### Ejecutar

```bash
npm run dev
```

---

# 🍎 Instalación en MacOS

## Instalar Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

---

## Instalar Node.js y Git

```bash
brew install node git
```

---

## Clonar proyecto

```bash
git clone https://github.com/tuusuario/tu-repositorio.git
```

---

## Entrar a la carpeta

```bash
cd codespaces-react
```

---

## Instalar dependencias

```bash
npm install
```

---

## Ejecutar

```bash
npm run dev
```

---

# 🤖 Instalación en Android (Termux)

## 1. Actualizar paquetes

```bash
pkg update && pkg upgrade -y
```

---

## 2. Instalar Node.js y Git

```bash
pkg install nodejs git -y
```

---

## 3. Clonar el repositorio

```bash
git clone https://github.com/tuusuario/tu-repositorio.git
```

---

## 4. Entrar a la carpeta

```bash
cd codespaces-react
```

---

## 5. Instalar dependencias

```bash
npm install
```

---

## 6. Ejecutar proyecto

```bash
npm run dev
```

---

# 📋 Comandos Disponibles

## Ejecutar en desarrollo

```bash
npm run dev
```

---

## Crear build de producción

```bash
npm run build
```

---

## Previsualizar build

```bash
npm run preview
```

---

# 📁 Estructura del Proyecto

```text
src/
├── App.jsx
├── Tiendita/
│   ├── Header.jsx
│   ├── Productos.jsx
│   └── Productos.css
├── App.css
└── main.jsx
```

---

# 🛠️ Tecnologías

- React
- Vite
- CSS
- JavaScript

---

# ❓ Problemas Comunes

## 🔴 Error: Missing script: dev

Revisa que tu `package.json` tenga:

```json
"scripts": {
  "dev": "vite"
}
```

---

## 🔴 Error: npm no reconocido

Verifica instalación:

```bash
node -v
npm -v
```

---

## 🔴 No carga localhost

Asegúrate de que:

```bash
npm run dev
```

esté ejecutándose.

---

## 🔴 Error de módulos

Eliminar `node_modules` y reinstalar:

### Linux / Mac

```bash
rm -rf node_modules
npm install
```

### Windows

```bash
rmdir /s node_modules
npm install
```

---

# ✅ Resultado Esperado

Después de ejecutar:

```bash
npm run dev
```

verás algo parecido a:

```bash
VITE ready in 500ms

➜ Local: http://localhost:3000/
```

---

# 🎉 Listo

Tu tienda React ya está funcionando correctamente.

Ahora puedes:

- Agregar productos
- Editar estilos
- Crear componentes
- Mejorar el diseño
- Agregar carrito de compras
- Conectar APIs

---
