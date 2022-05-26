require('dotenv').config()
module.exports = {
  host: process.env.DB_HOST_LOCAL,
  database: process.env.DB_DATABASE_LOCAL,
  dialect: process.env.DB_DIALECT_LOCAL,
  username: process.env.DB_USERNAME_LOCAL,
  password: process.env.DB_PASSWORD_LOCAL,
  port: process.env.DB_PORT_LOCAL,
}
