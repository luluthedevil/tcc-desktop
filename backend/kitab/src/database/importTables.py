# import libraries

import os
import numpy as np
import pandas as pd
import psycopg2


# find csv files in my current directory
# isolate the csv files
csv_files = []
for file in os.listdir(os.getcwd()):
    if file.endswith('.csv'):
        csv_files.append(file)

books = {}

for csv in csv_files:
    # create pandas df from the csv file
    try:
        books[csv] = pd.read_csv(csv, on_bad_lines='skip', dtype={
                                 'isbn': 'string', 'isbn13': 'string', 'ISBN_10': 'string', 'ISBN_13': 'string'})
    except UnicodeDecodeError:
        books[csv] = pd.read_csv(
            csv, on_bad_lines='skip', encoding="ISO-8859-1")


# replacement dictionary that maps pandas dtypes to sql dtypes
replaceTypes = {
    'object': 'varchar',
    'int64': 'int',
    'float64': 'float',
    'datetime64': 'timestamp',
    'timedelta64[ns]': 'varchar',
    'string': 'varchar'
}

# move the csv files to the new directory - to process the in isolation
for csv in csv_files:
    dataframe = books[csv]

    # remove .csv extension from table name
    tbl_name = '{0}'.format(csv.split('.')[0])

    # table schema
    col_str = ", ".join("{} {}".format(n, d) for (n, d) in zip(
        dataframe.columns, dataframe.dtypes.replace(replaceTypes)))

    # retirar colunas do skoob (lendo, querem ler, etc)

    # open database connection
    host = 'localhost'
    dbname = 'postgres'
    user = 'pguser'
    password = 'pgpassword'
    conn_string = "host=%s dbname=%s user=%s password=%s" % (
        host, dbname, user, password)

    conn = psycopg2.connect(conn_string)
    cursor = conn.cursor()

    # drop tables with same name
    cursor.execute("drop table if exists %s;" % (tbl_name))

    # create table
    cursor.execute("create table %s (%s)" % (tbl_name, col_str))

    # insert values to table

    # save df to csv
    dataframe.to_csv(csv, header=dataframe.columns,
                     index=False, encoding='utf-8')

    # open csv file, save it as an object
    my_file = open(csv)

    # upload to db
    SQL_STATEMENT = """
    COPY %s FROM STDIN WITH
    CSV
    HEADER
    DELIMITER AS ','
    """

    cursor.copy_expert(sql=SQL_STATEMENT % tbl_name, file=my_file)

    # grant multiple users acess
    cursor.execute("grant select on table %s to public" % (tbl_name))

    conn.commit()
    conn.close()

# see cols
# print(books_pt.info())
# print(books_pt.loc[1])

# see unique values
# print(pd.value_counts(books_pt.editora))

# https://www.youtube.com/watch?v=TDwy1lSjEZo
