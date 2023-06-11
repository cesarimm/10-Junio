import mysql.connector

# Establecer la conexión a la base de datos MySQL
conexion = mysql.connector.connect(
    host='us-cdbr-east-06.cleardb.net',
    user='beddfd21d18659',
    password='63973161',
    database='heroku_8a2759b0f147e56'
)

# Crear un cursor para ejecutar las consultas
cursor = conexion.cursor()

# Truncar la tabla payments
consulta_truncate = "TRUNCATE TABLE payments"
cursor.execute(consulta_truncate)

# Confirmar los cambios
conexion.commit()

# Cerrar la conexión
conexion.close()