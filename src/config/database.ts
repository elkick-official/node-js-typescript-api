require('dotenv').config()

module.exports = {
  development: {
    host: process.env.DEVELOPMENT_DB_HOST,
    database: process.env.DEVELOPMENT_DB_DATABASE,
    dialect: process.env.DEVELOPMENT_DB_DIALECT,
    username: process.env.DEVELOPMENT_DB_USERNAME,
    password: process.env.DEVELOPMENT_DB_PASSWORD,
    port: process.env.DEVELOPMENT_DB_PORT,
  },
  production: {
    host: process.env.PRODUCTION_DB_HOST,
    database: process.env.PRODUCTION_DB_DATABASE,
    dialect: process.env.PRODUCTION_DB_DIALECT,
    username: process.env.PRODUCTION_DB_USERNAME,
    password: process.env.PRODUCTION_DB_PASSWORD,
    port: process.env.PRODUCTION_DB_PORT,
  },
}
