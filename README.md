# Lacandon


En la siguiente figura, se muestra el modelo de dominio simplificado para el proyecto de lacando:


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

Diagrama de estados para el carrito de compra

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

Diagrama de estados para la administración de una queja

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