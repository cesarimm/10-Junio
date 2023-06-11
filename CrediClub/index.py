import pandas as pd
import mysql.connector
import math

# Archivos de entrada
archivos_excel = ['../files/Banamex.xlsx', '../files/Bancomer.xlsx', '../files/Santander.xlsx']

# Lista para almacenar los datos combinados
datos_combinados = []

# Lista para almacenar registros con montos no numéricos
registros_nulos = []

# Leer cada archivo y combinar los datos
for archivo in archivos_excel:
    # Leer el archivo de Excel
    df = pd.read_excel(archivo)
    
    # Verificar valores nulos y guardarlos en el archivo de registro
    if df.isnull().values.any():
        registros_nulos.extend(df[df.isnull().any(axis=1)].values)
    
     # Verificar montos no numéricos y guardarlos en la lista de registros nulos
    for _, row in df.iterrows():
        if pd.isnull(row['Monto']) or not isinstance(row['Monto'], (int, float)):
            registros_nulos.append(row)
        else:
            datos_combinados.append(row.values)

# Establecer la conexión a la base de datos MySQL
conexion = mysql.connector.connect(
    host='us-cdbr-east-06.cleardb.net',
    user='beddfd21d18659',
    password='63973161',
    database='heroku_8a2759b0f147e56'
)

# Crear un cursor para ejecutar las consultas
cursor = conexion.cursor()

# Ajustar el formato de la fecha
for i in range(len(datos_combinados)):
    fecha_excel = datos_combinados[i][0]
    fecha_python = pd.to_datetime(fecha_excel, format='%m/%d/%Y')
    datos_combinados[i][0] = fecha_python.strftime('%Y-%m-%d')

# Insertar los datos en la tabla payments
consulta_insert = """INSERT INTO payments (fecha, cliente, monto, banco) VALUES (%s, %s, %s, %s)"""

for datos in datos_combinados:
    cursor.execute(consulta_insert, (datos[0], datos[1], datos[2], datos[3]))
    
###Insercion de prueba
#cursor.execute(consulta_insert, ('2023-03-17', 'Juan Perez', 1234.56, 'Santander'))
conexion.commit()

# Cerrar la conexión
conexion.close()

# Guardar los datos combinados en un nuevo archivo Excel
#df_combinado = pd.DataFrame(datos_combinados, columns=['Fecha', 'Cliente', 'Monto', 'Proveedor'])
#df_combinado.to_excel('datos_combinados.xlsx', index=False)

# Guardar los registros nulos en un archivo de registro
df_nulos = pd.DataFrame(registros_nulos, columns=['Fecha', 'Cliente', 'Monto', 'Proveedor'])
df_nulos.to_csv('registros_nulos.log', index=False, sep='\t')
