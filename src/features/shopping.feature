# language: es

Característica: MODULO 02 - Gestión del carrito de compras

  Como cliente de Sauce Demo
  Quiero agregar productos y consultar mi carrito
  Para realizar una compra

  Escenario: FE-004 - Agregar producto al carrito
    Dado que estoy en la página de inicio de sesión
    Cuando inicio sesión con las credenciales del usuario estándar
    Y agrego "Sauce Labs Backpack" al carrito
    Entonces el carrito debería mostrar 1 producto

  Escenario: FE-005 - Consultar contenido del carrito
    Dado que estoy en la página de inicio de sesión
    Cuando inicio sesión con las credenciales del usuario estándar
    Y agrego "Sauce Labs Backpack" al carrito
    Y accedo al carrito de compras
    Entonces debería visualizar "Sauce Labs Backpack" en el carrito