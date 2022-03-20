# Frontend Films2022

Es el quinto proyecto que realizo en [GeekHubs Academy](https://geekshubsacademy.com/), consiste en la realización de un Frontend, utilizando React como libreria de JS, Redux para manejar el estado, Mantine como framework de CSS, y Axios para hacer las llamadas a mi API.


## Pre-requisitos 📋

Necesitaremos la instalación de un programa para realizar nuestro código, en este proyecto se ha utilizado [Visual studio code](https://code.visualstudio.com/Download/),

### Tecnologías utilizadas 🚀

El proyecto ha sido desarrollado utilizando los siguientes paquetes:

* @mantine/core
* @mantine/hooks
* @mantine/notifications
* Aos
* Axios
* React
* React-dom
* React-redux
* React-router-dom
* React-scripts
* Redux
* Redux-localstorage-simple
* Tabler-icons-react
* Web-vitals

## ¿Como desplegar el proyecto? 📋
Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo:

Clonarte el repositorio localmente:

> git clone url del repositorio
  
Instalar las depedencias necesarias:
  
> npm i

  
Para iniciar nuestro proyecto realizaremos el siguiente comando:
  
> npm start

😊 Genial ya tenemos todo listo para poder utilizar nuestra app desde la parte de Frontend, para poder inicializar el backend debemos ir al siguiente repositorio y seguir las instrucciones: https://github.com/XNycX/BackendAPI 😊
## Preview
### Vista HOME:
![foto](/src/img/Home.PNG)
### Vista LOGIN:
![foto](/src/img/Login.PNG)
### Vista REGISTER:
![foto](/src/img/Register.PNG)
### Vista PROFILE:
![foto](/src/img/Profile.PNG)
![foto](/src/img/UpdateProfile.PNG)
### Vista MOVIES:
![foto](/src/img/Movies.PNG)
![foto](/src/img/MovieDetail.PNG)
### VISTA ADMIN:
![foto](/src/img/AdminMovies.PNG)
![foto](/src/img/AdminOrders.PNG)
![foto](/src/img/AdminUsers.PNG)
  
## Funcionalidad de la APP 🛠️

Nuestra APP puede realizar las siguientes acciones:

- Puedes registrarte.
- Puedes hacer Log In.
- Ver las películas, ver el detalle de las películas(sinopsis de la película y precio) y alquilarlas.
- Tenemos una vista perfil donde ver los datos de usuario y modificarlos, y además ver las peliculas que has alquilado y cuando las tendrás que devolver.
- Si tienes el rol ADMIN, tienes una vista propia donde puedes ver todos los usuarios, pedidos y peliculas de la app y eliminarlos cada uno de ellos respectivamente.
- Si intentas acceder a página que no existe te llevará a una vista 404.
- Si intentas acceder a la vista de perfil sin haber realizado Log In te redireccionará a la vista Log In.
- Si estas logeado y no tienes el rol de admin e intentas acceder a la vista de ADMIN no te dejará.
- También cuenta con un buscador de películas.

* La aplicación ha sido deployada en AWS, utilizando la herramienta Amplify y el backend en Heroku. 

Para poder probar la aplicación utiliza el siguiente enlace:

https://main.d35v1bw4rlzu69.amplifyapp.com/

## Autores ✒️

* **Cristian Santamaria** - *Realización del proyecto total*
