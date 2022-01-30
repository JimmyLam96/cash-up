import psycopg2 
from psycopg2 import Error

try:
    connection = psycopg2.connect(
        user="postgres",
        password="Sqlb00m123",
        host="localhost",
        port="5433",
        database="cashupdb")

    cursor = connection.cursor()

    create_table_query = '''CREATE TABLE mobile
        (ID INT PRIMARY KEY        NOT NULL,
        MODEL           TEXT       NOT NULL,
        PRICE          REAL);  '''
    
    cursor.execute(create_table_query)
    connection.commit()
    print("Table created successfully in PostgreSQL")

except (Exception, Error) as error:
    print("Error while connecting to PostgreSQL", error)
finally:
    if (connection):
        cursor.close()
        connection.close()
        print("PostgreSQL connection is closed")