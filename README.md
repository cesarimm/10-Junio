
1. Para cargar los archivos de excel ejecutar el archivo index.py que se encuentra en la carpeta CrediClub -> Python 3.10 Requerido, así como las bibliotecas de pandas, numpy y mysql.connector
2. Si se desean eliminar los registros de la tabla de la base de datos ejecutar el archivo trucateTable.py
3. Ejecutar los comandos segun sea el caso python3 index.py o python3 truncateTable.py
4. Los registros que presentan errores se guardan en el archivo de registros_nulos.log dentro de la carpeta de CrediClub

La API se creo con express, para implementar una arquitectura MVC, para esto necesitamos instalar node y npm
1. Ejecutar la sig instruccion dentro de la carpeta backend los comandos 'npm install' 'npm install -g sequelize-cli'
2. Ejecutar la instruccion de npm update para actualizar la libreria
3. Para lanzar el servidor ejecutar la instruccion 'npm start' el servidor estara en escucha en el puerto 8000
4. Endpoint para obtener los registros guardados anteriormente 'http://localhost:8000/api/payment/list'

Frontend de la aplicacion
Se creo un proyecto de Vite el cual utiliza reactjs
1. Ejecutar en la carpeta frontend el comando 'npm install'
2. Posteior el comando de 'npm run dev'
3. Para acceder al frontend acceder a la sig liga: http://localhost:5173/

Nota: puede ser requerido que agreguemos a nuestro navegador la extension de CORS Unblock, para el duncionamiento correcto del sistema en local.

Acontinuacion se añade evidencia del funcionamiento.

Base de datos
Se utiliza una instancia de MySQL, atraves de un tercero en el servicio de Heroku
![image](https://github.com/cesarimm/10-Junio/assets/29169664/f48d87a4-1534-4888-a504-f5323fbd78e8)

Log de errores
![image](https://github.com/cesarimm/10-Junio/assets/29169664/8272d210-7062-4cf4-9d06-99614acb9a44)

Prueba de la API Rest full en Postman
![image](https://github.com/cesarimm/10-Junio/assets/29169664/8cf52606-02a6-430c-994f-57d0c7242d6a)

Frontend de la aplicacion
Aqui podemos observar la tabla d elos datos qe anteiormente se almacenaron, ademas de el btn para descragar el csv
![image](https://github.com/cesarimm/10-Junio/assets/29169664/f3ae7b08-3635-4e51-8093-81659b7639d4)

Evidencia del csv generado
![image](https://github.com/cesarimm/10-Junio/assets/29169664/f93b65b1-3355-45d9-8d5a-9d84ca48b746)


Conclusiones
En este trabajo, se abordó el problema de guardar datos de archivos de Excel en una base de datos utilizando un script en Python, implementando un patrón Modelo-Vista-Controlador (MVC) en Express.js para crear un servidor y una API para consultar la base de datos, y finalmente, se utilizó Vite para crear la interfaz de usuario y mostrar los datos.

El enfoque adoptado fue dividir el problema en diferentes componentes y utilizar herramientas específicas para cada uno.

En el script de Python, se utilizó la biblioteca Pandas para leer los archivos de Excel y procesar los datos. Se implementaron validaciones para detectar valores nulos o no numéricos y se guardaron en un archivo de registro. Luego, se utilizó la biblioteca mysql-connector-python para establecer una conexión con la base de datos MySQL y guardar los datos en la tabla "payments".

En Express.js, se siguió el patrón MVC para organizar el código. Se creó un modelo utilizando Sequelize para definir el esquema y las operaciones de la tabla "payments". Se implementó un controlador que maneja las solicitudes HTTP y utiliza el modelo para realizar consultas a la base de datos y devolver los resultados.

En Vite, se creó una aplicación de interfaz de usuario utilizando React.js. Se creó un componente de tabla para mostrar los datos de la base de datos. También se implementó un botón para exportar los datos a un archivo CSV.

En resumen, el enfoque utilizado se basó en la modularización del problema en diferentes componentes, aprovechando las fortalezas de cada tecnología (Python para el procesamiento de datos, Express.js para el servidor y la API, y Vite con React.js para la interfaz de usuario). Esto permitió abordar el problema de manera eficiente y escalable, utilizando herramientas especializadas en cada etapa del proceso

Dentro de las posibles mejoras, sería normalizar la base de datos. Añadir mas tablas como la de usuarios, la de bancos y la de errores.
Al momento de detectar un error en uun registro realizar el envio de una notificacion a la persona indicada, para que de seguimiento o posteiormente se abra un ticket de soporte. 
Dentro del script de python realizar el insert mediante la api, atraves de un servicio POST, ademas de cuando son muchos datos crear una funcion de insert_batch.
Ademas de agregar validación más robusta ya que script de Python podría incluir validaciones más exhaustivas para garantizar la integridad de los datos. Por ejemplo, se podría verificar que las fechas tengan el formato correcto antes de guardarlas en la base de datos.
Se deben implementar medidas de seguridad adicionales, como validar y sanitizar los datos de entrada, implementar autenticación y autorización adecuadas para acceder a la API, y proteger la base de datos contra ataques como inyecciones SQL.
Y mejorar la interfaz de usuario. 
