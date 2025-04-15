# Face Recognition UI with Teachable Machine

Este proyecto es una interfaz web moderna que utiliza un modelo de Teachable Machine para reconocer caras y mostrar información visual relacionada.

## Estructura del proyecto

```
face-recognition-ui/
├── index.html          # Página principal
├── style.css           # Hoja de estilos
├── script.js           # Lógica de reconocimiento facial
├── images/             # Fotos profesionales de cada persona
│   ├── David.jpg
│   ├── Lucia.jpg
│   └── Martin.jpg
└── my_model/           # Modelo exportado desde Teachable Machine
    ├── model.json
    └── metadata.json
```

## Cómo usar

1. Entrená un modelo en [Teachable Machine](https://teachablemachine.withgoogle.com/) para reconocimiento de imágenes.
2. Exportá el modelo como `TensorFlow.js` y reemplazá los archivos dentro de `my_model/`.
3. Reemplazá las imágenes en la carpeta `images/` con fotos profesionales correspondientes a cada clase/persona.
4. Abrí `index.html` en un navegador moderno.
5. Hacé clic en **Start Recognition** para activar la cámara y comenzar la detección.

## Publicación en GitHub Pages

1. Subí este repositorio a GitHub.
2. En el repositorio, andá a **Settings > Pages**.
3. En "Source", seleccioná la rama `main` y la carpeta raíz `/`.
4. GitHub generará una URL como:

```
https://tuusuario.github.io/face-recognition-ui/
```

## Requisitos

- Navegador moderno con acceso a cámara web.
- Conexión a internet para cargar TensorFlow.js.

## Licencia

Este proyecto es de uso libre para fines educativos y personales.
