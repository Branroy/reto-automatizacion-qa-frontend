# Reto de Automatización QA Frontend

## 1. Descripción del proyecto

Este proyecto tiene como objetivo implementar una solución de automatización de pruebas funcionales para una aplicación web, utilizando Playwright como herramienta de automatización y Serenity/JS con el patrón Screenplay.

La aplicación utilizada para las pruebas es **Sauce Demo** (https://www.saucedemo.com/), una plataforma de demostración que permite validar funcionalidades de autenticación y procesos de compra en línea.

La solución utiliza BDD (Behavior Driven Development), mediante escenarios escritos en Gherkin, permitiendo describir el comportamiento esperado del sistema de forma clara y entendible.

## 2. Tecnologías utilizadas

| Tecnología | Versión |
|---|---|
| Node.js | 24.22.2 |
| npm | 11.19.1 |
| TypeScript | 7.0.2 |
| Playwright | 1.64.1 |
| Playwright Core | 1.64.1 |
| Cucumber | 13.3.0 |
| Serenity/JS | 3.49.0 |
| ts-node | 10.9.2 |
| Chromium | Navegador de ejecución |

## 3. Arquitectura y patrón de diseño

El proyecto implementa el patrón **Screenplay**, que permite organizar la automatización mediante actores, habilidades, tareas y preguntas.

Los principales componentes son:

- **Actors:** representan a los usuarios que interactúan con la aplicación.
- **Abilities:** definen las capacidades del actor, como navegar utilizando Playwright.
- **Tasks:** representan acciones de negocio que ejecuta el actor.
- **Questions:** permiten consultar y validar el estado de la aplicación.
- **Step Definitions:** conectan los pasos de Gherkin con las acciones automatizadas.
- **Features:** contienen los escenarios de prueba escritos en Gherkin.

## 4. Estructura del proyecto

```text
reto-automatizacion-qa-frontend/
│
├── src/
│   ├── features/
│   │   ├── login.feature
│   │   └── shopping.feature
│   │
│   ├── step-definitions/
│   │
│   ├── screenplay/
│   │   ├── abilities/
│   │   ├── tasks/
│   │   └── questions/
│   │
│   ├── support/
│   │
│   └── test-data/
│       └── users.json
│
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## 5. Aplicación bajo prueba

**Nombre:** Sauce Demo

**URL:** https://www.saucedemo.com/

La aplicación permite simular un proceso de compra en línea, incluyendo autenticación, selección de productos, administración del carrito y finalización de pedidos.

## 6. Escenarios de prueba implementados

La automatización contempla los siguientes escenarios funcionales:

| ID | Módulo | Escenario |
|---|---|---|
| FE-001 | Login | Inicio de sesión exitoso |
| FE-002 | Login | Inicio de sesión con credenciales inválidas |
| FE-003 | Login | Validación de usuario bloqueado |
| FE-004 | Shopping | Agregar productos al carrito |
| FE-005 | Shopping | Visualizar y validar productos del carrito |
| FE-006 | Shopping | Completar el proceso de compra |
| FE-007 | Shopping | Validar información del checkout |

### Cobertura funcional

**Módulo 01: Login**

- Validación de autenticación exitosa.
- Validación de credenciales incorrectas.
- Validación de usuarios bloqueados.
- Validación de mensajes de error.

**Módulo 02: Shopping**

- Selección de productos.
- Agregado de productos al carrito.
- Validación del contenido del carrito.
- Proceso de checkout.
- Validación de información del comprador.
- Finalización del proceso de compra.

## 7. Instalación y configuración

### Requisitos previos

- Node.js 24 o superior.
- npm.
- Visual Studio Code o cualquier IDE compatible con TypeScript.
- Navegador Chromium.

### Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
```

Ingresar al proyecto:

```bash
cd reto-automatizacion-qa-frontend
```

### Instalar dependencias

```bash
npm install
```

### Instalar navegador Chromium

```bash
npx playwright install chromium
```

## 8. Ejecución de pruebas

Para ejecutar los escenarios automatizados, utilizar el comando de Cucumber configurado para el proyecto:

```bash
npx cucumber-js
```

La configuración de ejecución y los parámetros de Serenity/JS se encuentran definidos en los archivos de configuración del proyecto.

## 9. Buenas prácticas implementadas

- Aplicación del patrón Screenplay.
- Separación de responsabilidades.
- Uso de BDD mediante Gherkin.
- Organización modular de escenarios.
- Reutilización de tareas y preguntas.
- Centralización de datos de prueba.
- Uso de TypeScript para mejorar la mantenibilidad.
- Automatización de interacciones mediante Playwright.

## 10. Consideraciones finales

El proyecto demuestra la implementación de una solución de automatización de pruebas frontend utilizando herramientas modernas del ecosistema JavaScript y TypeScript.

La combinación de Playwright, Cucumber, Gherkin y Serenity/JS permite desarrollar una arquitectura organizada, escalable y orientada al comportamiento del usuario.

La solución cubre los principales flujos funcionales de Sauce Demo, desde la autenticación hasta la finalización de una compra.

---

**Proyecto:** Reto de Automatización QA Frontend  
**Aplicación:** Sauce Demo  
**Framework de automatización:** Playwright  
**BDD:** Cucumber / Gherkin  
**Arquitectura:** Serenity/JS - Screenplay  
**Lenguaje:** TypeScript  
**Runtime:** Node.js