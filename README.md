# Projecte_Integrat_2DAM
![Logo Trip Docs](/../enrique/src/assets/Logo.png)
# Trip Docs
## *All Documents at Hand*
### Un proyecto desarrollado por **Visoft** (Florida-Universitaria)
![QR](/../master/assets/qr.png)
----

### 1.	Integrantes de equipo de desarrollo

| Membres        | Email           | Avatar  |
| ------------- |:-------------:| :-----:|
| Josep Iborra Pons     | josersillero@gmail.com | <img src="https://avatars.githubusercontent.com/u/57388708?v=4" alt="Josep" width="100" height="100"/> |
| Ximo Quintana Ferrer     | xquintanaf.denia@gmail.com | <img src="https://avatars.githubusercontent.com/u/90713625?v=4" alt="Ximo" width="100" height="100"/> |
| Enrique Izquierdo Jiménez     | enrique.izquierdo@gmail.com | <img src="https://avatars.githubusercontent.com/u/73492386?v=4" alt="Enrique" width="100" height="100"/> |
| Pablo González Sánchez     | pablogonsan2001@gmail.com | <img src="https://avatars.githubusercontent.com/u/73492474?v=4" alt="Pablo" width="100" height="100"/> |
| Manuel Bas Sáez     | mabasa03@floridauniversitaria.es | <img src="https://avatars.githubusercontent.com/u/57366240?v=4" alt="Manuel" width="100" height="100"/> |


### 2.	Descripción del proyecto

App destinada a viajeros, que dispone de una serie de funcionalidades que facilitan la gestión de la documentación requerida en los viajes.


### 3.	Objetivo del proyecto

Facilitar a los usuarios una aplicación especializada en la documentación requerida en los viajes, que facilite a los usuarios la gestión, utilización y conservación de la misma mediante una serie de funcionalidades que garanticen la facilidad de uso, y la imposibilidad de acceso por terceras personas a dicha documentación.

 
### 4.	Justificación del proyecto

En la actualidad viajar a otros países, especialmente fuera de la unión europea, requiere de una gran cantidad de documentación que resulta difícil de gestionar y guardar, o conservar al preparar y realizar los viajes. Por lo que consideramos, que ***Trip Docs*** es una aplicación de gran interes para los viajeros, ya que facilita al usuario una serie de funcionalidades que facilitan la gestión ordendada de la documentación.

A continuación, detallamos un listado de la documentación que es posible tener que gestionar durante un viaje:

-	Documentación legal identificativa
    -	Pasaporte
    -	DNI o equivalente

-	Visados y permisos de entrada
    -	Visados
    -   Permisos de trabajo

-	Documentación sanitaria
    -	Pasaporte Internacional de Vacunación
    -	Pasaporte Covid
    -	Tarjeta Sanitaria Europea
    -	Justificantes exenciones por operaciones / tratamientos médicos (ej.: no arco detector metales por marcapasos, etc.).
    -	Justificantes medicación (recetas, informes médicos)
    -	Otras informaciones importantes.

-	Carnets utilización vehículos y actividades
    -	Permiso Internacional de Circulación
    -  	Permiso de Circulación

-	Seguros Privados
    -	Seguros de Viaje
    -	Seguros de Salud
    -	Seguros de Conducción (a terceros, etc.)

-	Billetes, reservas y entradas
    -	Medios de transporte
    -	Alojamiento
    -	Actividades

 
### 5.	Funcionalidades de la aplicación

Las principales funcionalidades implementadas en la aplicación son:
-	Acceso mediante usuario y contraseña encriptada.
- Organización de la información por:
    -   perfiles (campo de texto libre), y
    -   colecciones (identificativos, sanitarios, transportes, alojamientos, seguros, eventos, otros).
-	Registro de la documentación mediante:
    -   toma de una foto del documento con la app, e 
    -   introducción del nombre del documento, fecha de interes (caducidad, utilización, etc.), colección y perfil al que pertenece el documento.
-	Almacenamiento (persistencia) de la información registrada en una base de datos en Azure.
- Acceso a la información almacenada mediante un sistema constituido por tarjetas que muestra la información organizada por perfiles, permite filtrarla por colecciones y buscarla por el contenido del nombre del documento. 
-	Visualización de la imagen del documento al presionar sobre la terjeta seleccionada.
- Alertas por proximidad de la fecha de interes (caducidad, utilización, etc.) establecida al registrar el documento.
- Posibilidad de actualización de los documentos previamente registrados.
- Multiidioma (inglés, valenciano).

 
### 6.	Medios técnicos utilizados: tecnologías, lenguajes y estrategias de programación

En el desarrollo de la aplicación está previsto emplear distintos tipos de lenguajes y tecnologías, destacando las siguientes:
-	Lenguajes de programación: java, javascript, jsx
-	Lenguajes de marcas: json
-	Entornos de desarrollo y editores de código: Eclipse, Visual Studio Code
-	Gestores de bases de datos no solo relacionales: MongoDB
-	Librerías: React Native, React Native Paper, React Native Vector Icons, React Navigation, React Native Image Zoom Viewer, React Native Date Picker, MD5, i18next, Expo Image Picker, Axios
-	Servicio de servidor en la nube: Azure

La estrategia de programación planteada para poder gestionar los documentos guardados en formato imagen, consiste en crear una capa de metadatos (json), asociado a las imágenes guardadas, que contenga una plantilla con los campos que caracterizan a cada tipo de documento. Y que todos los datos, tanto archivos json como las imágenes de los documentos estén encriptadas para garantizar la confidencialidad de la información.

### 7.	Viabilidad del proyecto


Viabilidad económica
La aplicación ha necesitado de 5 programadores, trabajando 8 horas diarias durante 14 días a 15€ la hora el coste total de la aplicación en caso de venta será de 8400€. El coste de mantenimiento de la aplicación partiría de los 10€ al mes en mantener el servidor, aumentando este a medida que más usuarios utilicen nuestros servicios.


Viabilidad humana
Coste total
El equipo de trabajo actual tiene los conocimientos técnicos necesarios para el desarrollo total del producto mínimo viable por lo tanto no será necesario contratar a nadie más para el desarrollo básico de la aplicación. Una de las funcionalidades extras planteadas requeriría de un especialista con conocimientos de machine learning. A la hora de promocionar la aplicación necesitaríamos contratar a una persona capacitada para la creación y gestión de los anuncios y promociones como trabajador de la empresa, o contratar a una empresa externa para realizar todas estas gestiones.


Viabilidad técnica
Las herramientas utilizadas para el desarrollo de la app han sido React Native utilizando Expo para el front-end, Java, MongDB y Apache para el back-end, Axure para el diseño del mockup y Trello para la organización del equipo. Se han utilizado 5 ordenadores portátiles, uno por cada integrante del equipo y varios teléfonos móviles para las pruebas de la aplicación.


Monetización
La aplicación se publicara en la play store de android y la app store de iOS, no tendrá anuncios en pantalla, por lo tanto se monetizara a través de un sistema de suscripción mensual de 5€ que será necesario para desbloquear ciertas funciones exclusivas para suscriptores. Con la versión gratuita se podrán guardar hasta 5 documentos y utilizar un único perfil mientras que con la de pago podrás tener tantos documentos y perfiles como quieras. De esta forma, las suscripciones de los usuarios cubrirán los costes de mantenimiento del servidor, que irán creciendo a medida que crezca la base de usuarios de la aplicación.


Marketing
La aplicación se publicitara mediante servicios como google ads o Facebook ads, ya que la precisión a la hora de buscar potenciales clientes permitirá mostrar el anuncio únicamente a personas interesadas en viajar, o que viajen habitualmente. También se podrá promocionar mediante colaboraciones pagadas con influencers dedicados al nicho de los viajes, consiguiendo así llegar a potenciales usuarios de nuestros servicios de forma directa.

![Logo Trip Docs small](/../enrique/src/assets/logoPequenyoColorInvertido.png)
