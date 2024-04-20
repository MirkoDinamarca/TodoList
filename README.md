# Todo-List - Grupo 7

## Integrantes del Equipo

👨‍💻 Fernandez Martín, Juan Manuel | FAI-3641
👨‍💻 Ferrada, Bruno | FAI-3307
👨‍💻 Dinamarca, Mirko | FAI-2413

## Descripción

Este repositorio contiene la herramienta que se utiliza para organizar y gestionar tareas por hacer.
Le permite al usuario agregar nuevas tareas, marcar tareas como completadas y eliminar las mismas.

## Características

- index.js
Establece la estructura principal, en este archivo se importan aquellas dependencias que son necesarias desde un inicio.
Se encarga de renderizar el componente principal.

- App.js
Es el componente principal de la aplicación de React. Agrupa y renderiza los demás componentes de la aplicación.

- index.css
Son los estilos que se aplican cuando se renderiza el archivo inicial "index.js", dentro pueden haber diferente clases que se adapta
a los demás componentes.

- package-json.js
Es un archivo de configuración fundamental en toda aplicación de React. Dentro nos permite gestionar dependencias, es decir, instalar ciertas 
librerías o eliminar aquellas que no se utilicen. Además, nos permite ejecutar scripts personalizados como iniciar el servidor, realizar ciertas pruebas, etc.

## Tecnologías utilizadas

- React

## Instalación

1. Clona este repositorio:
   `git clone https://github.com/MirkoDinamarca/todolist.git`

2. Navega a la carpeta del proyecto:
   `cd todolist`

3. Instala las dependencias:
   `npm install` 

4. Ejecuta el proyecto (Si estás en Windows):
   `npm start`

Visita `http://localhost:3000` en tu navegador para ver la aplicación en funcionamiento.

## Descripción de la app
La aplicación nos enseña una lista de tareas completamente modificable para el usuario. Las tareas se pueden eliminar, marcar como completadas o desmarcarlas e incluso agregar nuevas tareas.
La app incluye tambien un buscador dinamico que filtra las tareas en base a lo que el usuario escriba en este.

## Preguntas

1. componentes: 
- Botones: Fue utilizado para agregar los botones de agregar y eliminar tarea. 

- List: Renderiza una lista de tareas con un contador de la cantidad total de tareas y las pendientes.

- Title: Renderiza titulo de la página.

- Task: Renderiza la tarea junto con un checkbox que determina el estado de la misma y un botón para eliminarla.

2. Utilizamos el hook useEstate en los siguientes elementos:
- Al eliminar la tarea, utilizamos un "setFilterTask"

- Al agregar tarea, se modifica el "setListTask" y el "setFilterTask". En la misma función se utiliza el "setValueInput1" para devolver el input a un estado vacio. 

- En la función "checkEstateCant", se modifica el setCantTask. 









