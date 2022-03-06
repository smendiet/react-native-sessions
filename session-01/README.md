# Sesión 1

## ¿Qué es React Native?

React Native es un framework Javascript creado originalmente por facebook para crear aplicaciones reales nativas para iOS y Android, basado en la librería de Javascript React

### Diferencias entre el código de React Native y React

* Uso de componentes en vez de html
* Los estilos se manejan de manera diferente (StyleSheet)

## Formas de crear un app de React Native

* con React Native CLI
* con Expo

### React Native CLI

Es la linea de commando official de React Native

#### Ventajas

* se pueden crear modulos nativos
* altamente personalizable
* se puede ver el código de cada plataforma

#### Desventajas
* es mas complejo de configurar

#### Iniciar un proyecto 

npx react-native init <nombre-proyecto>

#### Estructura de capeta

* Test 
es una buena practica crear primero los test

* .bundle
Se crear los compilados de la aplicación

* android
  dentro el archivo manifest columna vertebral de una app en android

* ios
  dentro el archivo podfile

### Expo

Expo es un marco y una plataforma para aplicaciones React universales. Es un conjunto de herramientas y servicios construidos alrededor de React Native y plataformas nativas que lo ayudan a desarrollar, construir, implementar e iterar rápidamente en iOS, Android y aplicaciones web desde la misma base de código JavaScript/TypeScript.

#### Ventajas
* facil de implentar
* se recomienda el uso al comienzo del proyecto y segun vaya creciendo el proyecto migrar a React Native CLI
#### Desventajas 

* No se pueden generar modulos nativos
* El tamaño de la aplicación es grande (se pueden optimizar)

#### Instalación

npm install -g expo-cli

#### Iniciar un proyecto

expo init <nombre-proyecto>

#### Estructura de capeta


