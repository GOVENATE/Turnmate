# 🕐 Turnmate - Sistema de Gestión de Turnos

> Una aplicación móvil multiplataforma desarrollada con React Native y Expo para la gestión eficiente de turnos de trabajo

[![React Native](https://img.shields.io/badge/React%20Native-0.81.5-blue?style=flat-square)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-54.0.25-black?style=flat-square)](https://expo.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-12.6.0-orange?style=flat-square)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Tipos de Usuarios](#-tipos-de-usuarios)
- [Funcionalidades Principales](#-funcionalidades-principales)
- [Comandos Disponibles](#-comandos-disponibles)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Configuración de Firebase](#-configuración-de-firebase)
- [Notificaciones Push](#-notificaciones-push)
- [Contribución](#-contribución)

---

## ✨ Características

- ✅ **Autenticación Multi-Usuario**: Admin, Empresa y Trabajador
- ✅ **Gestión de Turnos**: Crear, editar y asignar turnos
- ✅ **Calendario Interactivo**: Visualización de turnos en calendario
- ✅ **Sistema de Notificaciones**: Push notifications en tiempo real
- ✅ **Perfiles de Usuario**: Información personal y profesional
- ✅ **Historial de Solicitudes**: Registro de cambios de turnos
- ✅ **Dashboard Analítico**: Estadísticas y reportes
- ✅ **Soporte Multi-plataforma**: iOS, Android y Web
- ✅ **Google Sign-In**: Autenticación rápida
- ✅ **Interfaz Responsiva**: Diseño adaptable a diferentes pantallas

---

## 🔧 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior)
- **npm** o **yarn** (gestor de paquetes)
- **Expo CLI**: `npm install -g expo-cli`
- **Git** (para control de versiones)
- **Android Studio** (para emular Android) o **Xcode** (para iOS)
- Cuenta de **Firebase** con proyecto configurado
- Cuenta de **Google Cloud** para Google Sign-In

---

## 📦 Instalación

### 1. Clonar el Repositorio

```bash
git clone <repository-url>
cd Turnmate
```

### 2. Instalar Dependencias

```bash
npm install
# o si usas yarn
yarn install
```

### 3. Instalar Expo CLI (si aún no lo tienes)

```bash
npm install -g expo-cli
```

---

## ⚙️ Configuración

### 1. Variables de Entorno (.env)

Crea un archivo `.env` en la raíz del proyecto con las credenciales de Firebase:

```env
FIREBASE_API_KEY=tu_api_key
FIREBASE_AUTH_DOMAIN=tu_auth_domain
FIREBASE_PROJECT_ID=tu_project_id
FIREBASE_STORAGE_BUCKET=tu_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
FIREBASE_APP_ID=tu_app_id
```

⚠️ **Importante**: No incluyas el archivo `.env` en control de versiones. Añádelo a `.gitignore`.

### 2. Configuración de Firebase

```javascript
// src/config/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
```

### 3. Configuración de Google Sign-In

En `app.json`:

```json
{
  "plugins": ["@react-native-google-signin/google-signin"]
}
```

---

## 📁 Estructura del Proyecto

```
Turnmate/
├── assets/                          # Recursos estáticos (iconos, imágenes)
├── src/
│   ├── components/                  # Componentes reutilizables
│   │   ├── Banner.js               # Banner principal
│   │   ├── ButtonLogin.js          # Botón de login
│   │   ├── ButtonRequest.js        # Botón de solicitudes
│   │   ├── HeaderScreen.js         # Encabezado de pantallas
│   │   ├── InputLogin.js           # Input de formularios
│   │   ├── MenuFooter.js           # Menú pie de página
│   │   ├── MenuFooterAdmin.js      # Menú admin
│   │   ├── MenuFooterCompany.js    # Menú empresa
│   │   ├── InfoModal.js            # Modal informativo
│   │   ├── NotificationsModal.js   # Modal de notificaciones
│   │   ├── ReplacementModal.js     # Modal de reemplazo
│   │   ├── RazonOption.js          # Opciones de razón
│   │   ├── constants/              # Constantes y temas
│   │   │   └── theme.js            # Configuración de temas
│   │   └── index.js                # Exportaciones
│   │
│   ├── config/
│   │   └── firebaseConfig.js       # Configuración de Firebase
│   │
│   ├── screens/                    # Pantallas de la aplicación
│   │   ├── admin/                  # Pantallas de administrador
│   │   │   ├── CalendarAdmin.js
│   │   │   ├── DashboardAdmin.js
│   │   │   ├── EditProfileAdmin.js
│   │   │   ├── LoginAdmin.js
│   │   │   ├── MembersAdmin.js
│   │   │   ├── ProfileAdmin.js
│   │   │   └── RequestScreen.js
│   │   │
│   │   ├── company/                # Pantallas de empresa
│   │   │   ├── Dashboard.js
│   │   │   ├── EditProfileCompany.js
│   │   │   ├── InvoiceHistory.js
│   │   │   ├── LoginCompany.js
│   │   │   ├── MembersCompany.js
│   │   │   ├── PaymentMethod.js
│   │   │   ├── Plan.js
│   │   │   ├── ProfileCompany.js
│   │   │   └── RegisterCompany.js
│   │   │
│   │   ├── user/                   # Pantallas de trabajador
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Calendar.js
│   │   │   ├── History.js
│   │   │   ├── Profile.js
│   │   │   ├── EditProfile.js
│   │   │   ├── AddReport.js
│   │   │   ├── Help.js
│   │   │   ├── PasswordReset.js
│   │   │   └── Logout.js
│   │   │
│   │   ├── general/
│   │   │   └── Welcome.js
│   │   └── index.js
│   │
│   ├── services/                   # Servicios y API
│   │   ├── authService.js          # Autenticación
│   │   ├── userService.js          # Gestión de usuarios
│   │   ├── companyService.js       # Gestión de empresas
│   │   ├── groupService.js         # Gestión de grupos/turnos
│   │   ├── peticionService.js      # Gestión de solicitudes
│   │   ├── notificationService.js  # Notificaciones
│   │   └── pushNotificationService.js # Push notifications
│   │
│   ├── styles/                     # Estilos de componentes
│   │   ├── components/
│   │   ├── screens/
│   │   │   ├── admin/
│   │   │   ├── company/
│   │   │   ├── general/
│   │   │   └── user/
│   │   └── README.md
│   │
│   └── templates/                  # Plantillas reutilizables
│       ├── ScreenTemplate.js
│       └── StylesTemplate.js
│
├── documentation/                  # Documentación de componentes
├── .env                           # Variables de entorno
├── App.js                         # Punto de entrada principal
├── app.json                       # Configuración de Expo
├── babel.config.js               # Configuración de Babel
├── eas.json                       # Configuración de EAS Build
├── index.js                       # Punto de entrada
├── package.json                   # Dependencias del proyecto
└── README.md                      # Este archivo
```

---

## 👥 Tipos de Usuarios

### 1. **Administrador (Admin)**
- Gestión completa de turnos y personal
- Ver miembros del equipo
- Dashboard con estadísticas
- Gestión de solicitudes de cambio
- Edición de perfil admin

### 2. **Empresa (Company)**
- Gestión de miembros de la empresa
- Plans y métodos de pago
- Historial de facturas
- Dashboard de empresa
- Edición de perfil de empresa

### 3. **Trabajador (User)**
- Visualización de turnos asignados
- Calendario personal
- Solicitar cambios de turno
- Crear reportes
- Historial de solicitudes
- Chat de ayuda
- Edición de perfil personal

---

## 🎯 Funcionalidades Principales

### 🔐 Autenticación
- Login/Register para trabajadores
- Login específico para admin y empresa
- Google Sign-In integrado
- Recuperación de contraseña
- Persistencia de sesión con AsyncStorage

### 📅 Gestión de Turnos
- Visualización en calendario interactivo
- Creación y edición de turnos
- Asignación automática o manual
- Solicitud de cambios de turno
- Historial de cambios

### 📬 Notificaciones
- Push notifications en tiempo real
- Modal de notificaciones en-app
- Notificaciones de cambios de turno
- Alertas de solicitudes pendientes

### 📊 Dashboard
- Estadísticas de turnos
- Gráficos de ocupación
- Reportes de ausencias
- Análisis de solicitudes

### 👤 Gestión de Perfiles
- Edición de información personal
- Foto de perfil
- Información profesional
- Datos de contacto

---

## 🚀 Comandos Disponibles

```bash
# Iniciar la aplicación (modo desarrollo con caché limpio)
npm run test

# Iniciar la aplicación (modo desarrollo normal)
npm start

# Ejecutar en Android
npm run android

# Ejecutar en iOS
npm run ios

# Ejecutar en navegador web
npm run web
```

---

## 💻 Cómo Ejecutar la Aplicación

### Opción 1: Con Expo Go (Recomendado para primeros pasos)

1. Descarga la app **Expo Go** en tu móvil
2. Ejecuta: `npm start`
3. Escanea el código QR con tu móvil
4. ¡La app se abrirá automáticamente!

### Opción 2: Emulador de Android

```bash
npm run android
```

Requisitos: Android Studio con emulador configurado

### Opción 3: Emulador de iOS (Solo macOS)

```bash
npm run ios
```

Requisitos: Xcode instalado

### Opción 4: Web

```bash
npm run web
```

Se abrirá en: `http://localhost:19006`

---

## 📦 Tecnologías Utilizadas

### Framework & Plataforma
| Tecnología | Versión | Descripción |
|-----------|---------|------------|
| **React** | 19.1.0 | Librería UI |
| **React Native** | 0.81.5 | Framework móvil |
| **Expo** | 54.0.25 | Plataforma de desarrollo |

### Navegación
| Tecnología | Versión | Descripción |
|-----------|---------|------------|
| **@react-navigation/native** | 7.1.17 | Navegación base |
| **@react-navigation/native-stack** | 7.3.25 | Stack navigator |

### Autenticación & Backend
| Tecnología | Versión | Descripción |
|-----------|---------|------------|
| **Firebase** | 12.6.0 | Backend y autenticación |
| **firebase/auth** | - | Autenticación |
| **firebase/firestore** | - | Base de datos |
| **firebase/storage** | - | Almacenamiento |

### UI & Componentes
| Tecnología | Versión | Descripción |
|-----------|---------|------------|
| **@expo/vector-icons** | 15.0.3 | Iconos |
| **react-native-calendars** | 1.1313.0 | Calendario |
| **react-native-chart-kit** | 6.12.0 | Gráficos |
| **react-native-safe-area-context** | 5.6.0 | SafeArea |

### Notificaciones & Utilidades
| Tecnología | Versión | Descripción |
|-----------|---------|------------|
| **expo-notifications** | 0.32.13 | Notificaciones push |
| **expo-file-system** | 19.0.19 | Sistema de archivos |
| **expo-image-picker** | 17.0.8 | Selección de imágenes |
| **expo-document-picker** | 14.0.7 | Selección de documentos |
| **@react-native-google-signin/google-signin** | 16.0.0 | Google Sign-In |

---

## 🔥 Configuración de Firebase

### Pasos para Configurar Firebase:

1. **Crear un Proyecto en Firebase Console**
   - Ir a [Firebase Console](https://console.firebase.google.com/)
   - Crear nuevo proyecto

2. **Obtener Credenciales**
   - En Configuración del Proyecto → General
   - Copiar las credenciales de la app web

3. **Habilitar Métodos de Autenticación**
   - Authentication → Sign-in method
   - Habilitar: Email/Password, Google

4. **Crear Base de Datos Firestore**
   - Cloud Firestore → Crear base de datos
   - Modo de prueba (desarrollo)

5. **Configurar Storage**
   - Storage → Crear bucket
   - Región por defecto

6. **Configurar Variables de Entorno**
   - Crear archivo `.env`
   - Añadir credenciales

---

## 📲 Notificaciones Push

### Configuración de Notificaciones

El servicio de notificaciones está configurado en:
```
src/services/pushNotificationService.js
```

### Características:
- ✅ Notificaciones mientras la app está abierta
- ✅ Notificaciones cuando la app está cerrada
- ✅ Respuesta a clicks en notificaciones
- ✅ Integración con Firestore para persistencia

### Uso:

```javascript
import { sendLocalNotification } from './src/services/pushNotificationService';

// Enviar notificación local
await sendLocalNotification({
  title: '¡Nuevo Turno!',
  body: 'Te han asignado un turno',
  data: { turnId: '123' }
});
```

---

## 📝 Variables de Entorno

Crea un archivo `.env` en la raíz:

```env
# Firebase Configuration
FIREBASE_API_KEY=AIzaSyDxxxxxxxxxxxxxx
FIREBASE_AUTH_DOMAIN=proyecto.firebaseapp.com
FIREBASE_PROJECT_ID=proyecto-xxxxx
FIREBASE_STORAGE_BUCKET=proyecto-xxxxx.appspot.com
FIREBASE_MESSAGING_SENDER_ID=123456789
FIREBASE_APP_ID=1:123456789:web:xxxxxxxxxxxxxxx

# Google Sign-In (Opcional)
GOOGLE_WEB_CLIENT_ID=xxxxxxxxxxxxx.apps.googleusercontent.com
```

---

## 🛠️ Desarrollo

### Estructura de Componentes

Los componentes reutilizables están en `src/components/`:

```javascript
import { Banner, ButtonLogin, HeaderScreen } from './src/components';
```

### Estilo Global

El tema está configurado en:
```javascript
import theme from './src/components/constants/theme';
```

### Servicios

Todos los servicios están centralizados en `src/services/`:

```javascript
import { login, register } from './src/services/authService';
import { getUserData } from './src/services/userService';
```

---

## 📋 Lista de Documentación

Hay documentación adicional de componentes en:
- [Banner.txt](documentation/Banner.txt)
- [ButtonLogin.txt](documentation/ButtonLogin.txt)
- [HeaderScreen.txt](documentation/HeaderScreen.txt)
- [InputLogin.txt](documentation/InputLogin.txt)

---

## 🤝 Contribución

### Pasos para Contribuir:

1. **Fork el repositorio**
2. **Crear una rama** para tu feature: `git checkout -b feature/AmazingFeature`
3. **Hacer cambios** y comitear: `git commit -m 'Add AmazingFeature'`
4. **Push a la rama**: `git push origin feature/AmazingFeature`
5. **Abrir un Pull Request**

### Estándares de Código:
- Usar **camelCase** para variables y funciones
- Usar **PascalCase** para componentes
- Documentar funciones complejas
- Seguir el formato de archivos existentes

---

## 🐛 Solución de Problemas

### Error: "Cannot find module '@env'"
```bash
npm install react-native-dotenv --save-dev
```

### Error: "Firebase is not initialized"
- Verifica que `.env` esté correctamente configurado
- Reinicia la app: `npm run test`

### Error: "Notificaciones no funcionan"
- Habilita notificaciones en el dispositivo
- Verifica que Firebase Cloud Messaging esté configurado

### Emulador no abre
```bash
# Limpia caché de Expo
npm run test

# O limpia todo
rm -rf node_modules package-lock.json
npm install
```

---

## 📞 Soporte

Para reportar problemas o sugerencias:
- 📧 Email: kalonso276@gmail.com

---

## 👨‍💻 Autores

- **Desarrolladores**: Govenate

---

## 🙏 Agradecimientos

- Expo team por la plataforma increíble
- Firebase por el backend robusto
- React Native community por el soporte
- UAQ por la oportunidad de aprendizaje

---

## 📚 Recursos Útiles

- [Documentación React Native](https://reactnative.dev/docs/getting-started)
- [Documentación Expo](https://docs.expo.dev/)
- [Documentación Firebase](https://firebase.google.com/docs)
- [Icons Expo](https://icons.expo.fyi/)
- [React Navigation](https://reactnavigation.org/docs/getting-started/)

---

**Última actualización**: 2026-06-09

⭐ Si te resulta útil este proyecto, ¡no olvides darle una estrella!
