![licenseApache2](https://img.shields.io/hexpm/l/plug.svg)
# Circuitos Lineales II (Sitio web)

Este branch mantiene el sitio web del proyecto. Para minimizar el peso de la
página se utilizan los archivos css y js minificados, sin embargo no son
generados por github, cada cambio en la fuente va a afectar el archivo
minificado.

## Para probar
Para facilitar el desarrollo, se utiliza un servidor local para archivos
estáticos, y se observan las fuentes de los css's y los js's.

### Descargar Dependencias
Las dependencias son necesarias para [iniciar el servidor][#iniciar-servidor] y
para [observar las fuentes](#observar-fuentes).
```
> npm install
> npm install -g gulp
```
**EN UNIX** es posible que sea necesario utilizar sudo para el segundo commando:
```
> sudo npm install -g gulp
```

### Iniciar Servidor
```
> npm start
```

### Observar fuentes
Compila los archivos cambiados al ver un cambio(guardarse por ejemplo).
```
> gulp
```
