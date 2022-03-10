# Sesión 2

La clase se dividio en dos partes en la primera parte se realizo el setup de ambiente de desarrollo y en la segunda seguimos revisando mas componentes de React Native.

## Configuración de entorno de desarrollo
### Usar un celular como dispositivo de prueba
1. En celular y el pc se debe instalar Vysor
2. En el PC
  * Instalar Android Studio
  * Localizar adb de Android Studio
    * Project > More Actions > SDK Manager
    * Appearance & Behavior > System Settings > Android SDK > Buscar configuración Android SDK location 
    * desde la terminal entrar la ubicación Android SDK Location y entrar a la carpeta platform-tools/ 
  * desde la ubicación de adb

    como localizar adb de Android Studio
      * Project > More Actions > SDK Manager
      * Appearance & Behavior > System Settings > Android SDK > Buscar configuración Android SDK location 
      * desde la terminal entrar la ubicación Android SDK Location y entrar a la carpeta platform-tools/

    con el celular conectado ejecutar
      * adb devices (permite ver los dispositivos activos)
      * adb -s <hash del device> reverse tcp:8081 tcp:8081

3. Configurar las variables de entorno
  * Agregar al PATH
    * Android SDK location
    * ubicacion de platform-tools (para poder usar adb)
  * Agregar la variable de entorno ANDROID_SDK_ROOT con Android SDK Location

### Usar emulador

1. Instalar **Android Studio**
2. Entrar a Project > More Actions > Virtual Device Manager
3. Si tiene un dispositivo configurado ir al paso 8
4. Para configurar un nuevo dispositivo a emular debe dar click a "Create device"
5. En la nueva ventana llamada "Virtual Device Configuration" se debe escoger el disposivo a emular se recomieda usar Pixel 2 dado que tiene instalado el play store
6. en la nueva ventana de selección de imagen se recomienda usar la ultima imagen disponible
7. despues de la descarga en la nueva ventana "Verify Configuration" puede personalizar la configuración al terminar dar click en Finish el dispitivo quedara en la ventana de "Device Manager"
8. Escoge el dispositivo a emular y dar click en el icono de play

## Desarrollo con React Native

1. Componentes
  * Image
  * SafeAreaView
  * TouchableOpacity
2. esquema de carpetas
3. uso de StyleSheet

