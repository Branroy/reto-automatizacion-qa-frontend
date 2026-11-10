
# language: es

Característica: MODULO 03 - Proceso de compra en Sauce Demo

  Como cliente de Sauce Demo
  Quiero completar el proceso de compra
  Para finalizar mi pedido correctamente

  Escenario: FE-006 - Completar una compra exitosamente
    Dado que estoy en la página de inicio de sesión
    Cuando inicio sesión con las credenciales del usuario estándar
    Y agrego "Sauce Labs Backpack" al carrito
    Y accedo al carrito de compras
    Y inicio el proceso de compra
    Y ingreso los datos de checkout
    Y continúo al resumen de compra
    Y finalizo la compra
    Entonces debería visualizar la confirmación de compra


  Escenario: FE-007 - Validar nombre obligatorio
    Dado que estoy en la página de inicio de sesión
    Cuando inicio sesión con las credenciales del usuario estándar
    Y agrego "Sauce Labs Backpack" al carrito
    Y accedo al carrito de compras
    Y inicio el proceso de compra
    Y ingreso los datos del caso de validación "missingFirstName"
    Y continúo al siguiente paso
    Entonces debería visualizar el mensaje del caso de validación "missingFirstName"


  Escenario: FE-008 - Validar apellido obligatorio
    Dado que estoy en la página de inicio de sesión
    Cuando inicio sesión con las credenciales del usuario estándar
    Y agrego "Sauce Labs Backpack" al carrito
    Y accedo al carrito de compras
    Y inicio el proceso de compra
    Y ingreso los datos del caso de validación "missingLastName"
    Y continúo al siguiente paso
    Entonces debería visualizar el mensaje del caso de validación "missingLastName"


  Escenario: FE-009 - Validar código postal obligatorio
    Dado que estoy en la página de inicio de sesión
    Cuando inicio sesión con las credenciales del usuario estándar
    Y agrego "Sauce Labs Backpack" al carrito
    Y accedo al carrito de compras
    Y inicio el proceso de compra
    Y ingreso los datos del caso de validación "missingPostalCode"
    Y continúo al siguiente paso
    Entonces debería visualizar el mensaje del caso de validación "missingPostalCode"
