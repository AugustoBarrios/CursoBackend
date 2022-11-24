//En esta carpeta se encunetra el primer trabajo final (Fwf o First work final). 
//Codigo aun en proceso.

//Paqueteria necesaria para el proyecto
//(npm i express)
//(npm i ejs)
//(npm i multer)
//(npm i socket.io)

//ARCHIVO INDEX.JS
//En este archivo se encuentra toda la base del proyecto, en el mismo se encuentra el objeto constructor con todos sus metodos. A su vez //tiene lo necesario para levantar el servidor en el puerto 8080, la variable "ruta" almacena la direccion del archivo array.JSON para poder //presentarle dicha informacion al objeto contructor y que a su vez este pueda utilizar dicha informacion para mostrarla. 

//Podra encontrar al principio de la pagina todas las declaraciondes de los modulos intalados en el proyecto (express, socket.io, http, etc)

//A la mitad del archivo encontrara todo el objeto constructor

//Y al final podra ver las variables y funciones necesarias para levantar el servidor, ademas de las rutas app.get y app.post. Encontrara tambien //la variable del storage para guardar todo archivo que se agregue en el input file que se encuentra en la ruta //public/views/partial/formulario.js.
//Ademas encontrara las variables del modulo de socket.io para la app de chat.


//Carpeta public
//Dentro de esta carpeta usted encontrara las carpetas de:
//css/inicio.css
//uploads en donde encontrara todas las imagenes estaticas para el historial de productos
//views/inicio.ejs
//views/partials/chats.ejs
//views/partials/formulario.ejs
//views/partials/historial.ejs
//main => En dicha carpeta se encuentra toda la informacion que requiere el modulo socket.io para funcionar del lado del cliente. Los datos
//que recibe son enviados al archivo index.js, el cual le devuelve una respuesta y termina de cargar los productos en el .ejs.

//Saludos profe