
# language: es

Característica: MODULO 01 - Inicio de sesión en Sauce Demo

  Como usuario de Sauce Demo
  Quiero iniciar sesión en la aplicación
  Para acceder a las funcionalidades de compra

  Escenario: FE-001 - Inicio de sesión exitoso con usuario estándar
    Dado que estoy en la página de inicio de sesión
    Cuando inicio sesión con las credenciales del usuario estándar
    Entonces debería acceder al inventario de productos

  Escenario: FE-002 - Inicio de sesión rechazado para usuario bloqueado
    Dado que estoy en la página de inicio de sesión
    Cuando inicio sesión con las credenciales del usuario bloqueado
    Entonces debería visualizar el mensaje de usuario bloqueado

  Escenario: FE-003 - Inicio de sesión rechazado con credenciales incorrectas
    Dado que estoy en la página de inicio de sesión
    Cuando inicio sesión con credenciales incorrectas
    Entonces debería visualizar el mensaje de credenciales incorrectas
