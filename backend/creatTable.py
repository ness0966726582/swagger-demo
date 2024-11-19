import os
from dotenv import load_dotenv
import psycopg2

# 載入 .env 檔案
load_dotenv()

# 從 .env 讀取資料庫設定
POSTGRES_SERVER = os.getenv('N_POSTGRES_SERVER')
POSTGRES_PORT = os.getenv('N_POSTGRES_PORT')
POSTGRES_USER = os.getenv('N_POSTGRES_USER')
POSTGRES_PASSWORD = os.getenv('N_POSTGRES_PASSWORD')
POSTGRES_DB = os.getenv('N_POSTGRES_DB')

# 建立資料庫連線
try:
    connection = psycopg2.connect(
        host=POSTGRES_SERVER,
        port=POSTGRES_PORT,
        user=POSTGRES_USER,
        password=POSTGRES_PASSWORD,
        dbname=POSTGRES_DB
    )
    cursor = connection.cursor()

    # 建立資料表語法
    create_table_query = """
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100)
    );
    """
    cursor.execute(create_table_query)
    connection.commit()
    print("資料表建立成功或已存在。")

    # 插入資料語法
    insert_data_query = """
    INSERT INTO users (name, email) VALUES (%s, %s);
    """
    cursor.execute(insert_data_query, ('2019051401', 'ness_huang@mail.bbiclark.com'))
    connection.commit()
    print("資料插入成功。")

except Exception as e:
    print(f"發生錯誤: {e}")
finally:
    if connection:
        cursor.close()
        connection.close()
        print("資料庫連線已關閉。")
