# Face Recognition UI with Teachable Machine

Este proyecto es una interfaz web moderna que utiliza un modelo de Teachable Machine para reconocer imagenes y mostrar información visual relacionada.

## Estructura del proyecto

```
face-recognition-ui/
├── index.html          # Página principal
├── style.css           # Hoja de estilos
├── script.js           # Lógica de reconocimiento facial
├── images/             # Fotos a mostrar cuando se reconoce una clase
│   ├── clase1.jpg
│   └── clase2.jpg
│
└── my_model/           # Modelo exportado desde Teachable Machine
    ├── model.json
    └── metadata.json
```

## Cómo usar

1. Entrená un modelo en [Teachable Machine](https://teachablemachine.withgoogle.com/) para reconocimiento de imágenes.
2. Exportá el modelo como `TensorFlow.js` y reemplazá los archivos dentro de `my_model/`.
3. Reemplazá las imágenes en la carpeta `images/` con fotos correspondientes a cada clase.
4. Abrí `index.html` en un navegador moderno. Para evitar restriccionds de CORS, es necesario poner a correr un web server para servir esta app.
5. Si la máquina tiene instalado python3 la manera mas facil de hacer esto es abrir una consola, pararse en la carpeta del proyecto y ejecutar el siguiente comando:

```
py -m http.server
```

6. Hacé clic en **Start Recognition** para activar la cámara y comenzar la detección.
7. Al reconocer una clase, la app envia un post a localhost:1880/claseX (siendo X el numero de clase)
8. Si en la misma PC está corriendo node-red, se puede crear un flujo que escuche los post y con esto interactuar con un PLC o enviar datos a la nube, entre otras.



## Publicación en GitHub Pages

1. Subí este repositorio a GitHub.
2. En el repositorio, andá a **Settings > Pages**.
3. En "Source", seleccioná la rama `main` y la carpeta raíz `/`.
4. GitHub generará una URL como:

```
https://tuusuario.github.io/face-recognition-ui/
```
En este caso, para interactuar con node-red, hay que ponerlo a correr en una maquina a la que la app web tenga acceso desde github pages.

## Requisitos

- Navegador moderno con acceso a cámara web.
- Conexión a internet para cargar TensorFlow.js.

## Licencia

Este proyecto es de uso libre para fines educativos y personales.
