# Rest-API-NodeJs-Express-Mysql
Servicios REST-API 

# Instalacion de dependencias usando los siguientes comandos 
## npm init -y
Comando Inicial para arrancar el proyecto de Node
## npm i dotenv
Instalacion Para manejo de las variables de entorno como las credenciales a la base de datos
## npm i express cors
Instalacion del Framework Express  para el desarrollo de servicios Web con NodeJs
## npm install promise-mysql2
Instalacion para  manejar las conexiones de forma asincrona con Mysql y realizar las consultas

## npm i @babel/cli @babel/core @babel/node @babel/preset-env morgan nodemon -D
Instalacion dependencias de desarrollo Babel --> Para traspilar el codigo de JavaScript, nodemon --> Para monitorear los cambios y reiniciar automaticamente el servidor,  Morgan --> para la captura de solicitudes HTTP para Node. js

# Tips de conexion
Para Lograr la conexion con la Base de datos Mysql es Necesario Darle Privilegios a nuestra base de datos 
para ello podemos correr el siguiente query en mysql --->  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; --> En el apartado 'password' va la contraseña de la base de datos despues es necesario correr el siguiente query ---> FLUSH PRIVILEGES;


