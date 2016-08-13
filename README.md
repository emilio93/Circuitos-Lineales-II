# Circuitos Lineales II

## Contenidos
- [Sobre el Repositorio](#sobre-el-repositorio)
- [¿Cómo utilizar?](#cmo-utilizar)
  - [Comprobando LaTeX](#comprobando-latex)
  - [Compilando](#compilando)

## Sobre el Repositorio
El propósito de este repositorio es el de transcribir material del curso de
circuitos lineales ii de la ucr (IE0309).

Los [Apuntes](https://github.com/emilio93/Circuitos-Lineales-II/tree/master/Apuntes)
son el principal objetivo a completar por el momento, y conforme transcurra el
semestre(ii 2016) se irá agregando los apuntes de la clase.

## ¿Cómo Utilizar?

Actualmente se da soporte a Window, sin embargo revisando el archivo
[```build.bat```](https://github.com/emilio93/Circuitos-Lineales-II/blob/master/Apuntes/build.bat)
y [```build.bat```](https://github.com/emilio93/Circuitos-Lineales-II/blob/master/build.bat)
se puede obtener información del proceso de compilación.

### Comprobando LaTeX

Para poder compilar las fuentes en un archivo pdf, se va a necesitar```pdflatex```,
para asegurarse que lo tiene puede ejecutar el siguiente comando en la consola:

```bash
pdflatex -version
```

Que debería indicar la versión instalada de [MikTEX](http://miktex.org/) o
[TeX Live](http://www.tug.org/texlive/), en caso de no tenerlo, debe instalarlo.

Este es un posible resultado de ejecutar el comando anterior:

```bash
MiKTeX-pdfTeX 2.9.5840 (1.40.16) (MiKTeX 2.9)
Copyright (C) 1982 D. E. Knuth, (C) 1996-2014 Han The Thanh
TeX is a trademark of the American Mathematical Society.
compiled with zlib version 1.2.8; using 1.2.8
compiled with libpng version 1.6.19; using 1.6.19
compiled with poppler version 0.32.0
compiled with jpeg version 8.4
```

### Compilando

Una vez comprobado que se tiene pdflatex, se puede compilar el archivo con el
siguiente comando en la consola:

```bash
build.bat
```

Esto va a compilar el archivo pdf de los apuntes.

**Nota:** asegurarse que la consola esté en el folder del proyecto.
