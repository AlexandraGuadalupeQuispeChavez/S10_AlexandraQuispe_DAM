# Inscripción a Evento - React Native

Aplicación móvil de formulario de inscripción a eventos desarrollada con React Native y Expo.

## Descripción del Proyecto

Esta aplicación implementa un formulario interactivo para inscripción a eventos, cumpliendo con los siguientes requisitos:

### Características Principales

**Campos del Formulario:**
- Nombre Completo (obligatorio)
- Correo Electrónico (obligatorio, con validación)
- Edad (obligatoria, validación numérica)
- Tipo de Entrada (selección obligatoria: General, VIP, Estudiante)

**Validaciones Implementadas:**
1. Nombre Completo: Campo obligatorio, mínimo 3 caracteres
2. Correo: Validación de formato con @ y dominio válido
3. Edad: Número válido entre 1 y 120 años
4. Tipo de Entrada: Selección obligatoria de una opción

**Características Técnicas:**
- Manejo de estados con useState
- Validación en tiempo real con onChangeText
- Feedback visual inmediato (errores y éxito)
- Interfaz adaptada a estándares móviles
- Diseño limpio y profesional
- Componentes Pressable y Button

## Instalación y Ejecución

### Prerrequisitos

- Node.js (v14 o superior)
- npm o yarn
- Expo CLI
- Expo Go (en dispositivo móvil) o Android Studio / Xcode

### Pasos de Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/TU_USUARIO/S10_AlexandraQuispe_DAM.git
   cd S10_AlexandraQuispe_DAM
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el proyecto:**
   ```bash
   npm start
   ```
   o
   ```bash
   expo start
   ```

4. **Ejecutar en dispositivo:**
   - Escanea el código QR con la app **Expo Go** (Android/iOS)
   - O presiona `a` para Android emulator
   - O presiona `i` para iOS simulator

## Uso de la Aplicación

1. **Completa el formulario:**
   - Ingresa tu nombre completo
   - Escribe tu correo electrónico
   - Indica tu edad
   - Selecciona el tipo de entrada

2. **Validación en tiempo real:**
   - Los errores se muestran inmediatamente al escribir
   - Los campos incorrectos se resaltan en rojo

3. **Enviar inscripción:**
   - Presiona el botón "✓ Inscribirse"
   - Si hay errores, se mostrará un mensaje de advertencia
   - Si todo es correcto, verás un mensaje de éxito

4. **Limpiar formulario:**
   - Presiona el botón "↻ Limpiar" para reiniciar

## Tecnologías Utilizadas

- React Native 0.74.0
- Expo ~51.0.0
- React 18.2.0
- JavaScript ES6+

## Estructura del Proyecto

```
S10_AlexandraQuispe_DAM/
├── App.js                 # Componente principal con formulario
├── app.json              # Configuración de Expo
├── package.json          # Dependencias del proyecto
├── babel.config.js       # Configuración de Babel
├── .gitignore           # Archivos ignorados por Git
└── README.md            # Documentación
```

## Criterios de Evaluación Cumplidos

- [x] El formulario funciona correctamente sin errores de ejecución
- [x] Los datos se manejan mediante estados (`useState`)
- [x] Las validaciones se ejecutan de forma lógica e interactiva
- [x] Se muestran mensajes claros de error y éxito
- [x] La interfaz está adaptada a un estándar móvil limpio
- [x] El proyecto está organizado y disponible en GitHub

## Conceptos Aplicados

- TextInput - Campos de entrada de texto
- useState - Manejo de estado de React
- onChangeText - Captura de cambios en tiempo real
- Pressable / Button - Componentes de interacción
- Validaciones - Lógica de validación personalizada
- Feedback UI - Retroalimentación visual al usuario

## Capturas de Pantalla

Las capturas de pantalla se deben generar ejecutando la aplicación en Expo Go:

1. Captura 1: Formulario principal
2. Captura 2: Formulario con errores de validación
3. Captura 3: Formulario con mensaje de éxito

## Notas Importantes

- No incluye módulos de Login, contraseña ni autenticación
- No usa bases de datos, APIs ni servicios externos
- Funcionamiento completamente local
- Validaciones del lado del cliente

## Autor

Alexandra Quispe

Desarrollo de Aplicaciones Móviles - S10 | AP5

## Licencia

Este proyecto es parte de una actividad académica.
