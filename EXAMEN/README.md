# Simulador de Examen - React

Un simulador de examen moderno y profesional creado con React y Vite para preparar tu examen de fin de carrera.

## 🚀 Características

- ✅ Interfaz moderna y atractiva
- ⚛️ Construido con React (componentes reutilizables)
- 📊 Barra de progreso visual
- ✅ Indicador de respuestas correctas/incorrectas
- 📝 Muestra la respuesta correcta cuando fallas
- 📈 Estadísticas al final del examen
- 📱 Diseño responsive (funciona en móviles y tablets)
- ⚡ Desarrollo rápido con Vite

## 📦 Instalación

1. **Instala las dependencias:**
```bash
npm install
```

2. **Inicia el servidor de desarrollo:**
```bash
npm run dev
```

3. **Abre tu navegador** en la URL que aparece (generalmente `http://localhost:5173`)

## 🏗️ Construir para producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos estarán en la carpeta `dist/`. Puedes desplegarlos en cualquier servidor web.

Para previsualizar la versión de producción:

```bash
npm run preview
```

## 📝 Personalizar las preguntas

Edita el archivo `questions.json` en la raíz del proyecto para agregar tus propias preguntas. El formato es:

```json
[
    {
        "question": "Tu pregunta aquí",
        "options": ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
        "correct": 0
    }
]
```

**Notas importantes:**
- `question`: El texto de la pregunta
- `options`: Un array con las 4 opciones de respuesta
- `correct`: El índice (0-3) de la respuesta correcta (0 = primera opción, 1 = segunda, etc.)

### Ejemplo

```json
{
    "question": "¿Qué es React?",
    "options": [
        "Un lenguaje de programación",
        "Una biblioteca de JavaScript",
        "Un framework de CSS",
        "Una base de datos"
    ],
    "correct": 1
}
```

## 📁 Estructura del Proyecto

```
simulador-examen/
├── src/
│   ├── components/
│   │   ├── StartScreen.jsx      # Pantalla de inicio
│   │   ├── ExamScreen.jsx       # Pantalla del examen
│   │   ├── ResultsScreen.jsx    # Pantalla de resultados
│   │   ├── StartScreen.css
│   │   ├── ExamScreen.css
│   │   └── ResultsScreen.css
│   ├── App.jsx                  # Componente principal
│   ├── App.css
│   ├── main.jsx                 # Punto de entrada
│   └── index.css                # Estilos globales
├── questions.json               # Base de datos de preguntas
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Cómo usar

1. Instala las dependencias con `npm install`
2. Inicia el servidor con `npm run dev`
3. Haz clic en "Comenzar Examen"
4. Selecciona una respuesta y haz clic en "Siguiente"
5. Revisa si tu respuesta fue correcta
6. Continúa con la siguiente pregunta
7. Al final verás tus resultados

## 🛠️ Tecnologías utilizadas

- **React 18** - Biblioteca de JavaScript para construir interfaces
- **Vite** - Herramienta de construcción rápida
- **CSS3** - Estilos modernos con gradientes y animaciones

## 📱 Compatibilidad

Funciona en todos los navegadores modernos:
- Chrome
- Firefox
- Edge
- Safari
- Opera

## 💡 Ventajas de usar React

- **Componentes reutilizables**: Código más limpio y organizado
- **Estado manejado fácilmente**: React maneja el estado de la aplicación
- **Escalable**: Fácil agregar nuevas características
- **Moderno**: Usa las mejores prácticas de desarrollo frontend
- **Mantenible**: Código más fácil de mantener y extender

## 🌐 Desplegar en GitHub Pages

Para compartir tu simulador con tus compañeros usando GitHub Pages:

1. **Crea un repositorio en GitHub:**
   - Ve a [GitHub](https://github.com) y crea un nuevo repositorio
   - Nómbralo como quieras (por ejemplo: `simulador-examen`)

2. **Instala gh-pages (si no lo tienes):**
   ```bash
   npm install
   ```

3. **Actualiza el archivo `vite.config.js`:**
   - Cambia `/EXAMEN/` por el nombre de tu repositorio
   - Si tu repositorio se llama `simulador-examen`, usa: `base: '/simulador-examen/'`

4. **Conecta tu proyecto con GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Primer commit - Simulador de examen"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

5. **Despliega a GitHub Pages:**
   ```bash
   npm run deploy
   ```

6. **Habilita GitHub Pages en tu repositorio:**
   - Ve a Settings → Pages en tu repositorio de GitHub
   - En "Source", selecciona "gh-pages" branch
   - Guarda los cambios

7. **Tu simulador estará disponible en:**
   `https://TU_USUARIO.github.io/TU_REPOSITORIO/`

**Nota:** Después de cada cambio, ejecuta `npm run build` y `npm run deploy` para actualizar el sitio.

---

¡Buena suerte en tu examen! 🎓
