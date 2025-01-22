# Express basico

Para iniciar mi proyecto de node + npm:

```bash
npm init -y
```

Esto me creará un `package.json` con los datos de mi proyecto. Este archivo sirve para varias cosas, pero principalmente encontraremos las dependencias del proyecto.

Para instalar dependencias en un proyecto de `nodejs` y `npm` hacemos:
```bash
npm install express
npm i express # version corta
```

Es buena practica y recomendadi, meter `node_modules` en nuestro `.gitignore` para evitar subir todas las dependencias.

Para arrancar el servidor lanzo en la terminal `node server.js`

## Endpoint básico

Este endpoint me devuelve un "Hola mundo" tanto en el servidor como al cliente

```javascript
function holaMundo(request, response){
    console.log("Hola mundo") // Esto se ejecuta en el servidor
    response.send("Hola mundo") // Esto se devuelve al cliente
}

app.get("/", holaMundo)
```