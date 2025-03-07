

# Descripción del negocio

Lacandon es una corporación mexicana de comercio electrónico y servicios de computación en la nube a todos los niveles con sede en la ciudad de méxico.​ Su lema es: De la A a la Z. Es una de las primeras grandes compañías en vender bienes a través de Internet y actualmente es la más importante en el país. Los productos que ofrece son variados y de todo tipo,

Lacandón está conformada por 5 grandes áreas de proceso:

1. Gestión de ventas
2. Gestión de operaciones
3. Gestión de quejas
4. Gestión de inventario
5. Gestión de proveedores

El **área de gestión de ventas** se encarga de registrar, actualizar y ofrecer los productos que la empresa vende.

El **área de gestión de operaciones**, se encarga de revisar, validar y aprobar las ventas realizadas por la empresa

El **área de gestión de quejas**, es la responsable de atender las quejas realizadas por clientes insatisfechos y se asegura que el cliente quede contento con los productos ofrecidos.

El **área de gestión de inventario**, es la encargada de administrar todo el inventario que llega al negocio; desde su registro, hasta su entrega.

El **área de gestión de proveedores**, tiene como responsabilidad la contratación, y administración de proveedores que ofrecen productos y servicios a la empresa.

# Necesidad del negocio

La empresa Lacandón busca aumentar su presencia en el mercado brindando una experiencia simple y rápida en sus ventas, busca obtener una aplicación de software en la que sus clientes puedan realizar sus compras con total confianza y seguridad, y de igual manera procesar los reportes mensuales de ventas. Así mismo, se busca automatizar el mayor número de áreas de proceso con la finalidad de maximizar las ventas de la empresa.

# Descripción del proyecto

## Objetivo general 

Definir, diseñar, e implementar un sistema de software que permita la digitalización de punta a punta del proceso principal de la empresa **lacandón**, con la finalidad de optimizar las tareas operativas y maximizar las ventas.


## Objetivos específicos

1. Definir el **modelo general de procesos** para la empresa lacandón, con la finalidad de visualizar los principales procesos y flujos que se deberán de automatizar.

2. Definir el **alcance del proyecto** en términos de épicas e historias de usuario.

3. Definir una lista con las **reglas de negocio** que se deberán de cumplir  

4. Crear un **diagrama de contexto** con la solución técnica propuesta, con la finalidad de ubicar todos los elementos que se deberán de considerar para la implementación del sistema de software.

5. Definir el **modelo de dominio** de lacandón utilizando la notificación UML, con la finalidad de identificar los elementos principales del negocio, sus relaciones y propiedades.

6. Definir el **modelo de datos** del sistema que se utilizará para persistir los elementos de dominio del negocio.

7. Construir un **mapa de navegación** con las pantallas que se implementarán durante el proceso de digitalización de procesos, con la finalidad de contar con el alcance del proyecto a nivel de pantallas.

8. Crear un **plan de trabajo** con las historias de usuarios y actividades que se deberán de considerar durante la realización del proyecto, con la finalidad de contar con un mecanismo de seguimiento y control del proceso de digitalización de la empresa lacandón.


## Alcance del Proyecto:

El proyecto de digitalización de procesos está conformado por los siguiente módulos:

1. Gestión de ventas
2. Gestión de operaciones
3. Gestión de quejas
4. Gestión de inventario
5. Gestión de proveedores

A continuación, se describen las funcionalidades requeridas por cada módulo en términos de historias de usuarios y sus respectivos criterios de aceptación:


### Gestor de ventas

El gestor de ventas está conformado de los siguientes submódulos:

1. Registro de pedidos
2. Consulta de pedidos


#### Registro de pedidos:

Como Cliente,  quiero buscar un producto dentro del sistema, con la finalidad de comprarlo o agregarlo a mi carrito de compra.

Como Cliente,  quiero agregar un producto a mi carrito de compra, con la finalidad de comprarlo o apartarlo para más tarde

Como Cliente,  quiero consultar el contenido de mi carrito de compra, con la finalidad de administrar su contenido o proceder a su compra.

Como Cliente,  quiero quitar un producto de mi carrito de compra, con la finalidad de que no sea procesado durante el pago de mi cuenta.

Como Cliente,  quiero ver el detalle de un producto, con la finalidad de verificar que es el más adecuado para comprar

Como Cliente,  quiero ver el detalle de un producto, con la finalidad de verificar que es el más adecuado para comprar.

Como Cliente,  quiero ver el detalle de un producto, con la finalidad de verificar que es el más adecuado para comprar.

Como Cliente,  quiero llevar a cabo la compra de los productos contenidos en mi carrito, con la finalidad de adquirirlos y pagar por ellos.

Como Cliente,  quiero registrar la dirección a la que me deberán de llegar mis productos, con la finalidad de que mis productos lleguen al lugar correcto.


#### Consulta de pedidos

Como Cliente,  quiero consultar la lista de pedidos que he realizado, con la finalidad de consultar el estado en el que se encuentra cada uno y poder administrarlos.

Como Cliente,  quiero consultar el detalle de un pedido, con la finalidad de revisar los productos que he comprado y el estado de mi pedido.


### Gestor de operaciones

#### Consulta de pedidos

Como Operador,  quiero consultar la lista de pedidos que se han realizado, con la finalidad de administrarlos y proceder a su repartición.

Como Operador,  quiero ver el detalle de un pedido, con la finalidad de ver los productos que se han solicitado y el estado en el que se encuentra el pedido.

Como Operador,  quiero ver el detalle de un pedido, con la finalidad de ver los productos que se han solicitado, consultar el estado en el que se encuentra el pedido y actualizarlo.

Como Operador,  quiero actualizar el estado de los pedidos que se encuentran en enviado y pasarlos al estado de enviado, con la finalidad de dar seguimiento al pedido.

Como Operador,  quiero cancelar un pedido, con la finalidad de que no sea procesado ni enviado a su destino.

### Gestor de quejas

#### Registro de quejas

Como Cliente, quiero registrar una queja, con la finalidad de reportar un incumplimiento, reportar un mal funcionamiento de un producto o simplemente expresar mi opinión sobre el servicio y atención que se me oficio. 

#### Consulta de quejas

Como Cliente, quiero consultar la lista de quejas que he levantado, con la finalidad de administrarlas y darles seguimiento.

Como Cliente, quiero consultar el estado en el que se encuentra una de mis quejas y la respuesta que se le pudo dar, con la finalidad de estar informado con el estado de mi queja.

Como Operador, quiero consultar la lista de quejas que se han levantado, con la finalidad de administrarlas y darles seguimiento.

Como Operador, quiero realizar una búsqueda parametrizada de las quejas que han llegado hasta el momento , con la finalidad de darles seguimiento y brindar atención oportuna.

Como Operador, quiero ver el detalle de una queja, con la finalidad de darles seguimiento.

Como Operador, quiero editar el detalle de una queja, con la finalidad de darle respuesta y mantener comunicación con nuestros clientes.

### Gestor de proveedores
#### Registro de proveedor

Como Operador, quiero registrar un proveedor, con la finalidad de mantener un registro actualizado de los proveedores de la empresa


#### Consulta de proveedores

Como Operador, quiero consultar la lista de proveedores que tenemos registrados, con la finalidad de administrarlos y mantener un registro actualizado.

Como Operador, quiero consultar el detalle de un proveedor, con la finalidad de visualizar la información y verificar que está actualizada.

Como operador, quiero dar de baja a un proveedor, con la finalidad de mantener actualizado el registro de proveedores vigentes de la empresa.

**Requisitos No Funcionales:** 

Los requerimientos no funcionales para la  digitalización de punta a punta del negocio Lacandón, son los siguientes:

**Eficiencia**

- Toda funcionalidad del sistema y transacción de negocio debe responder al usuario en menos de 5 segundos.
- El sistema debe ser capaz de operar adecuadamente con hasta 100.000 usuarios con sesiones concurrentes.
- Los datos modificados en la base de datos deben ser actualizados para todos los usuarios que acceden en menos de 2 segundos.

**Seguridad**

- Los permisos de acceso al sistema podrán ser cambiados solamente por el administrador de acceso a datos.
- El nuevo sistema debe desarrollarse aplicando patrones y recomendaciones de programación que incrementen la seguridad de datos.
- Todos los sistemas deben respaldarse cada 24 horas. Los respaldos deben ser almacenados en una localidad segura ubicada en un edificio distinto al que reside el sistema.
- Todas las comunicaciones externas entre servidores de datos, aplicación y cliente del sistema deben estar encriptadas utilizando el algoritmo RSA.
- Todas las comunicaciones externas entre servidores de datos, aplicación y cliente del sistema deben realizarse por medio de redes privadas virtuales (VPN).

- Si se identifican ataques de seguridad o brecha del sistema, el mismo no continuará operando hasta ser desbloqueado por un administrador de seguridad.

**Usabilidad**

- El tiempo de aprendizaje del sistema por un usuario deberá ser menor a 4 horas.
- La tasa de errores cometidos por el usuario deberá ser menor del 1% de las transacciones totales ejecutadas en el sistema.
- El sistema debe contar con manuales de usuario estructurados adecuadamente.
- El sistema debe proporcionar mensajes de error que sean informativos y orientados al usuario final.
- El sistema debe contar con un módulo de ayuda en línea.
- La aplicación web debe poseer un diseño “Responsive” a fin de garantizar la adecuada visualización en múltiples computadores personales, dispositivos tablets y teléfonos inteligentes.
- El sistema debe poseer interfaces gráficas bien formadas.
- El aplicativo deberá de utilizar los lenguajes de español e inglés

## Metodología

En la presente sección se va a describir lo que es un proyecto y el proceso o flujo de trabajo que se lleva a cabo con el fin de satisfacerlo. Explicar el proyecto desde el punto de vista del proceso que se sigue para atenderlo, nos permitirá entender cuáles son los principales productos de trabajo que se necesitan y deducir una estructura útil que nos ayude a resguardarlos. El proceso o flujo de trabajo descrito en esta sección es un resumen muy general de las prácticas de desarrollo de software.

Fundamentalmente, un proyecto está conformado por objetivos, metas y actividades descritas a través de un **plan de trabajo.** El proyecto está acotado por un **alcance** que describe un conjunto de funcionalidades que son de valor para el área solicitante y que deberán ser implementadas por una plataforma informática bajo ciertos criterios preestablecidos. En este sentido, para poder llevar a cabo el proceso de implementación de las funcionalidades se debe diseñar una solución informática que instrumente las acciones, reglas de negocio y flujos de trabajo que se deben de automatizar. La solución informática está conformada por una **arquitectura de software**, a partir de la cual se integran cambios funcionales de manera iterativa e incremental y provenientes de los alcances acordados entre el equipo de desarrollo y el área solicitante. Los incrementos funcionales son requerimientos o especificaciones de software descritos de manera formal a través de historias de usuario y resguardadas en los alcances de cada proyecto. A partir de las historias de usuario se crean los casos de **prueba** a partir de los cuales se valida que se implementó la pieza de software de manera correcta. El proceso de verificación se lleva a cabo a través de los criterios de aceptación y las sesiones demo con los usuarios a partir de los cuales se da un visto bueno a las funcionalidades desarrolladas. Los vistos buenos, planes de trabajo, configuraciones, entre otros elementos, pueden llegar a requerir **formalización**, que implica la firma de aprobación entre el área solicitante y el área de implementación. Una vez que la funcionalidad está lista para ponerse en operación, se deberá de crear o actualizar los **manuales** que dan soporte a la documentación de las funcionalidades desde una perspectiva de usuario final y técnica. 


### Descripción de la estructura documental de un proyecto

La estructura documental de un proyecto es la conformación de carpetas y archivos organizados de manera lógica y por temas que nos permiten estructurar la información de un proyecto con la finalidad de resguardar y localizar la información de manera eficiente. Con la finalidad de resguardar la información generada durante el proceso descrito en la sección “Descripción de un proyecto”, se define una estructura de archivos como la siguiente:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfGkgODJwXaRxNKstAKOXfdxa3S3DggQttTrtdMMjM4aWoMN0cCJq_snUQ4GRVGvDprGF5D7mYyxDmh_a1a2506rLwQNGoSyfjZKglkCIPanmcC7gDG6xS6jiqO9SrLiVFXb3knD5i3N6lScWPc7ue8LWC8?key=Y83Z-wW7jA6hVoeernOUmw)

Estructura documental de un proyecto o plataforma

|                                |                                                                                                                                                                                                                                                                                                                                                                                                 |
| :----------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|       **Carpeta/Archivo**      |                                                                                                                                                                                         **Descripción**                                                                                                                                                                                         |
|         planes-trabajo         |                                   Es la carpeta en la que se guardan todos los planes de trabajo que se han generado para el proyecto en la forma de un tablero taiga o en algún otro formato. Para los planes de trabajo que se generaron utilizando taiga, existe un archivo especial llamado planes.xlsx, en donde se guardan los vínculos a los tableros.                                   |
|   planes-trabajo/planes.xlsx   |                                                                                                    Este archivo contiene la lista de vínculos a los tableros de la herramienta taiga y que se han creado para la administración de los planes de trabajo del proyecto. Este archivo es único.                                                                                                   |
|            alcances            |                                                                                      La carpeta en la que se guardan todos los documentos de alcance, historias de usuario y configuraciones que definen el proyecto. Cada documento de alcance hace referencia a un área de negocio, módulo o subsistema.                                                                                      |
|    alcances/configuraciones    |   En esta carpeta se almacenan las configuraciones realizadas para una plataforma. Las configuraciones son una alternativa a los alcances, donde la plataforma se encuentra en un mayor nivel de madurez y que no requiere de un desarrollo para cumplir con un requerimiento, más bien una configuración. Principalmente, las plataformas que soportan configuración son ápeiron y salsa peo.  |
|          arquitectura          | Se trata de la carpeta en la que se encuentran todos los documentos y modelos que conforman la arquitectura y diseño del sistema de software que brindan apoyo al proyecto. Principalmente en esta carpeta existen 3 documentos **referencias.xlsx**, **modelo.mdj** y **arquitectura.docx**. Se pueden incluir más documentos siempre y cuando estos ayuden a reforzar el diseño del proyecto. |
|  arquitectura/referencias.xlsx |                                                                                                      En este documento se guardan los vínculos que hacen referencia a un elemento de diseño que se encuentra en alguna otra plataforma o documentación que ha sido publicada de forma web.                                                                                                      |
|     arquitectura/modelo.mdj    |                                              Es el diseño lógico de la plataforma generado con la herramienta Start UML <https://staruml.io/> y en formato **.mdj** . Cuando este elemento no exista en el formato de mdj, entonces se deberá de incluir la referencia hacia el documento que lo sustituye y se deberá de llamar Modelo de dominio.                                             |
| arquitectura/arquitectura.docx |                                                                                              Es el documento de arquitectura de la plataforma. Cuando este documento no exista, se deberá incluir todos los modelos, imágenes, documentos y vínculos relacionados con la arquitectura del sistema.                                                                                              |
|             pruebas            |                                                                                                                     En esta carpeta se resguardan las matrices de prueba que se han realizado en el proyecto, con la finalidad de tener el historial de pruebas ejecutadas.                                                                                                                     |
|          formalizados          |                                                                                                            Es la carpeta en la que se guardan todos los documentos firmados en el proyecto, mayormente son documentos digitalizados que se suben firmados de manera digital o física.                                                                                                           |
|            manuales            |                                                                            Es la carpeta en la que se guardan los manuales de usuarios que han sido distribuidos a los usuarios finales y que resguardan las instrucciones detalladas para realizar las funcionalidades especificadas en los alcances de un proyecto.                                                                           |



El proyecto, se deberá de llevar con un enfoque de desarrollo ágil, que permita dar seguimiento de manera periódica y que se pueda ir revisando el estado del proyecto de manera iterativa e incremental.


## Lista de herramientas

1. Visual studio code
2. Staruml


## Entregables del proyecto

- **Código Fuente:**
  - **Repositorio en github**
- **Documentación:** 
  - La especificada en la sección 5. Metodología
- **Presentación:** 
  - Presentación de 30 minutos empleando la práctica del **sprint review**

## Evaluación del proyecto

La evaluación del proyecto se llevará a cabo mediante el checklist definido en el siguiente vínculo:

[**https://docs.google.com/spreadsheets/d/1uMmPhXwkc4bBaWxjUFa1GFkn9gLnaMFLseUf2sruxxo/edit?usp=drive\_link**](https://docs.google.com/spreadsheets/d/1uMmPhXwkc4bBaWxjUFa1GFkn9gLnaMFLseUf2sruxxo/edit?usp=drive_link)
