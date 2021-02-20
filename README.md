# Obtener Tabla de Multiplicar
Este es un proyecto NodeJS diseñado para introducir las bases de node. Forma parte del curso NodeJS de Cero a Experto del profesor Fernando Herrera de la plataforma Udemy.

## Resumen
Esta aplicación se ejecuta en la línea de comandos. Debes ingresar la base de la tabla de multiplicar que quieras obtener y opcionalmente puedes indicar la cantidad de multiplos que quieres obtener (por defecto, 10) y si quieres visualizarlos en la línea de comandos o no. La ejecución exitosa de la aplicación retorna un archivo txt con la tabla de multiplicar solicitada.

## Opciones
```
  --help       Muestra ayuda                                          [booleano]
  --version    Muestra número de versión                              [booleano]
  -b, --base   Es la base de la tabla de multiplicar.       [número] [requerido]
  -l, --lista  Muestra la tabla de multiplicar en consola.
                                                     [booleano] [defecto: false]
  -h, --hasta  Indica cuántos múltiplos de la base quieres obtener desde el 1
               hasta el que indiques (10 por defecto).    [número] [defecto: 10]
```