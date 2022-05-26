require('dotenv').config()
const Sequelize = require('sequelize')
const { Role } = require('../modules/role/domain/model/Role')
const { User } = require('../modules/user/domain/model/User')
const { UserRole } = require('../modules/userRole/domain/model/UserRole')
const node_env = process.env.NODE_ENV
let DB_CONFIG

if (node_env === 'development') {
  DB_CONFIG = require('../config/database.development')
} else {
  DB_CONFIG = require('../config/database.production')
}
console.log(`Running in ${node_env}`)
const connection = new Sequelize(DB_CONFIG)

User.init(connection)
Role.init(connection)
UserRole.init(connection)

// Associating Models Relationships
User.associate(connection.models)
UserRole.associate(connection.models)

module.exports = connection
