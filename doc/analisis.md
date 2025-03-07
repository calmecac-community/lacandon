# Análisis y diseño

## Diagrama de contexto para la plataforma

Un Diagrama de Contexto de Sistema (DCS) en Ingeniería de software e Ingeniería de sistemas es un diagrama que define los límites entre el sistema, o parte del sistema, y su ambiente, mostrando las entidades que interactúan con él.2​ Este diagrama es una vista de alto nivel de un sistema.

A continuación se muestra el diagrama de contexto para **Lacandon**:

```mermaid
    C4Context
      Person(Cliente, "Cliente")
      Person(Operador, "Operador")
      
      Enterprise_Boundary(b0, "Plataforma Lacandon") {

        System(Auth, "Autenticación y<br> Autorización")
        System(GestorVentas, "Gestor de<br> ventas")
        System(GestorOperaciones, "Gestor de<br> operaciones")
        System(GestorQuejas, "Gestor de<br> quejas")
        System(GestorInventario, "Gestor de<br> inventario")
        System(GestorProveedores, "Gestor de<br> proveedores")

        UpdateElementStyle(Auth, $bgColor="red")
      }

```

Funcionalidades del **Cliente**

```mermaid
    C4Context
      Person(Cliente, "Cliente")
      
      Enterprise_Boundary(b0, "Plataforma Lacandon") {

        System(Auth, "Autenticación y<br> Autorización")
        System(GestorVentas, "Gestor de<br> ventas")
        System(GestorQuejas, "Gestor de<br> quejas")

        Rel(Cliente, Auth, "iniciar sesión")
        Rel(Cliente, GestorVentas, "Comprar productos")
        Rel(Cliente, GestorQuejas, "Registrar quejas")

        UpdateElementStyle(Auth, $bgColor="red")
        UpdateRelStyle(Cliente, GestorVentas, $offsetX="-50", $offsetY="50")
        UpdateRelStyle(Cliente, GestorQuejas, $offsetX="200", $offsetY="87")

      }

```

## Casos de uso

Los casos de uso son modelos que describen cómo los usuarios interactúan con un sistema. Se representan mediante diagramas de casos de uso. 

A continuación se presentan los macro casos de uso que conforman a la plataforma lacandon


![Casos de uso](../doc/plantuml-out/doc/casos-de-uso/casos-de-uso/casos-de-uso.svg)

### Autenticación y autorización

![Autenticacion y autorización](../doc/plantuml-out/doc/casos-de-uso/auth/auth.svg)

### Gestor de proveedores

![Gestor de proveedores](../doc/plantuml-out/doc/casos-de-uso/proveedores/proveedores.svg)

Registro de proveedor

Como Operador, quiero registrar un proveedor, con la finalidad de mantener un registro actualizado de los proveedores de la empresa

Consulta de proveedores

Como Operador, quiero consultar la lista de proveedores que tenemos registrados, con la finalidad de administrarlos y mantener un registro actualizado.

Como Operador, quiero consultar el detalle de un proveedor, con la finalidad de visualizar la información y verificar que está actualizada.

Como operador, quiero dar de baja a un proveedor, con la finalidad de mantener actualizado el registro de proveedores vigentes de la empresa.


### Gestor de inventario

![Gestor de inventario](../doc/plantuml-out/doc/casos-de-uso/inventario/inventario.svg)


### Gestor de Ventas

![Gestor de ventas](../doc/plantuml-out/doc/casos-de-uso/ventas/ventas.svg)

Registro de pedidos:

Como Cliente,  quiero buscar un producto dentro del sistema, con la finalidad de comprarlo o agregarlo a mi carrito de compra.

Como Cliente,  quiero agregar un producto a mi carrito de compra, con la finalidad de comprarlo o apartarlo para más tarde

Como Cliente,  quiero consultar el contenido de mi carrito de compra, con la finalidad de administrar su contenido o proceder a su compra.


Como Cliente,  quiero quitar un producto de mi carrito de compra, con la finalidad de que no sea procesado durante el pago de mi cuenta.

Como Cliente,  quiero ver el detalle de un producto, con la finalidad de verificar que es el más adecuado para comprar

Como Cliente,  quiero ver el detalle de un producto, con la finalidad de verificar que es el más adecuado para comprar.

Como Cliente,  quiero ver el detalle de un producto, con la finalidad de verificar que es el más adecuado para comprar.

Como Cliente,  quiero llevar a cabo la compra de los productos contenidos en mi carrito, con la finalidad de adquirirlos y pagar por ellos.

Como Cliente,  quiero registrar la dirección a la que me deberán de llegar mis productos, con la finalidad de que mis productos lleguen al lugar correcto.

Consulta de pedidos

Como Cliente,  quiero consultar la lista de pedidos que he realizado, con la finalidad de consultar el estado en el que se encuentra cada uno y poder administrarlos.

Como Cliente,  quiero consultar el detalle de un pedido, con la finalidad de revisar los productos que he comprado y el estado de mi pedido.


### Gestor de operaciones

![Gestor de operaciones](../doc/plantuml-out/doc/casos-de-uso/operaciones/operaciones.svg)

Consulta de pedidos

Como Operador,  quiero consultar la lista de pedidos que se han realizado, con la finalidad de administrarlos y proceder a su repartición.

Como Operador,  quiero ver el detalle de un pedido, con la finalidad de ver los productos que se han solicitado y el estado en el que se encuentra el pedido.
Como Operador,  quiero ver el detalle de un pedido, con la finalidad de ver los productos que se han solicitado, consultar el estado en el que se encuentra el pedido y actualizarlo.

Como Operador,  quiero actualizar el estado de los pedidos que se encuentran en enviado y pasarlos al estado de enviado, con la finalidad de dar seguimiento al pedido.

Como Operador,  quiero cancelar un pedido, con la finalidad de que no sea procesado ni enviado a su destino.


### Gestor de quejas

![Gestor de quejas](../doc/plantuml-out/doc/casos-de-uso/quejas/quejas.svg)

Registro de quejas

Como Cliente, quiero registrar una queja, con la finalidad de reportar un incumplimiento, reportar un mal funcionamiento de un producto o simplemente expresar mi opinión sobre el servicio y atención que se me oficio. 

Consulta de quejas

Como Cliente, quiero consultar la lista de quejas que he levantado, con la finalidad de administrarlas y darles seguimiento.

Como Cliente, quiero consultar el estado en el que se encuentra una de mis quejas y la respuesta que se le pudo dar, con la finalidad de estar informado con el estado de mi queja.

Como Operador, quiero consultar la lista de quejas que se han levantado, con la finalidad de administrarlas y darles seguimiento.

Como Operador, quiero realizar una búsqueda parametrizada de las quejas que han llegado hasta el momento , con la finalidad de darles seguimiento y brindar atención oportuna.

Como Operador, quiero ver el detalle de una queja, con la finalidad de darles seguimiento.


Como Operador, quiero editar el detalle de una queja, con la finalidad de darle respuesta y mantener comunicación con nuestros clientes.


## Modelo de dominio

Un modelo de dominio es una representación de los conceptos, reglas y relaciones que definen un dominio de problema.

En la siguiente figura, se muestra el modelo de dominio simplificado para la plataforma **Lacandon**:


```mermaid

%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'primaryColor': 'white',
      'primaryTextColor': 'black',
      'primaryBorderColor': 'black',
      'lineColor': 'black'
    }
  }
}%%
classDiagram

    Usuario -- "1..*" Carrito: tiene
    Usuario --> "1..*" Queja: registra
    Usuario --> "1..*" Rol
    Carrito --> EstadoCarrito
    Carrito -- "1..*" RegistroProducto
    RegistroProducto "1..*" -- Producto
    Queja --> EstadoQueja
    Producto --> Categoria

    class Usuario {
        String login
        String email
        String password
        String firstName
        String lastName
        List~ Rol~  roles
    }
    class EstadoCarrito {
        <<Enumeración>>
        CREADO
        SOLICITADO
        RECHAZADO
        ENTREGADO
    }

    class Queja {
        Long id
        String descripcion
        String comentarios
        EstadoQueja estado
    }

    class EstadoQueja{
        <<Enumeración>>
        REGISTRADA
        ASIGNADA
        RECHAZADA
        CERRADA
    }

    class Carrito {
        Long id
        Long usuarioId
        Instant fechaCreacion
        EstadoCarrito estado

    }

    class RegistroProducto {
        <<Asociación>>
        Long carritoId
        Long productoId
    }

    class Producto {
        <<Catálogo>>
        Long id
        String nombre
        String descripcion
        Double precio 
        Blob imagen
        String contentType
        Long cantidad
    }

    class Categoria {
        <<Enumeración>>
        ALIMENTOS
        TECNOLOGIA
        ROPA_Y_ZAPATERIA
        MASCOTAS
        FARMACIA
        JUGUETERIA
    }

    class Rol {
        <<Enumeración>>
        USUARIO
        OPERADOR
    }
```

## Diagrama de estados

El diagrama de estados es un diagrama de comportamiento usado para especificar el comportamiento de una parte del sistema diseñado a través de transiciones de estados finitos. Es utilizado para mostrar los estados por los que pasa un componente de un sistema de información.

### Diagrama de estados para el carrito de compra

A continuación se muestra el diagrama de estados para el Objeto **Carrito de Compra**

```mermaid
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'primaryColor': 'white',
      'primaryTextColor': 'black',
      'primaryBorderColor': 'black',
      'lineColor': 'black'
    }
  }
}%%
stateDiagram
    state "Administración del carrito de compra" as Carrito
    state Carrito {
        [*] --> CREADO
        CREADO --> SOLICITADO: enviar
        SOLICITADO --> RECHAZADO: rechazar
        SOLICITADO --> ENTREGADO: entregado
        RECHAZADO --> SOLICITADO: enviar
        ENTREGADO --> [*]

    }
```

### Diagrama de estados para la administración de una queja

A continuación se muestra el diagrama de estados para el Objeto **Queja**

```mermaid
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'primaryColor': 'white',
      'primaryTextColor': 'black',
      'primaryBorderColor': 'black',
      'lineColor': 'black'
    }
  }
}%%
stateDiagram
    state "Administración de una queja" as Queja
    state Queja {
        [*] --> REGISTRADA
        REGISTRADA --> ASIGNADA: asignar
        REGISTRADA --> RECHAZADA: rechazar
        ASIGNADA --> RECHAZADA: rechazar
        ASIGNADA --> ATENDIDA: resuelta
        ATENDIDA --> [*]

    }
```
