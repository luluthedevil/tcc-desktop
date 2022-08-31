module.exports = {
    "name": "postgres",
    "type": "postgres",
    "host": "localhost",
    "port": "5432",
    "username": "pguser",
    "password": "pgpassword",
    "database": "postgres",
    "entities": [
      __dirname + "entities/**/*.entity.ts"
    ]
  }