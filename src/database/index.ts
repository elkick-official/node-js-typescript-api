const Sequelize = require('sequelize')
const { Role } = require('../modules/role/domain/model/Role')
const { User } = require('../modules/user/domain/model/User')
const { UserRole } = require('../modules/user-role/domain/model/UserRole')
const node_env = process.env.NODE_ENV

const dbConfig = require('../config/database')
const connection: any = {}
console.log(`Running in ${node_env}`)
// connectionObject
const sequelize = new Sequelize(
  node_env === 'development' ? dbConfig?.development : '',
)

User.init(sequelize)
Role.init(sequelize)
UserRole.init(sequelize)

// Associating Models Relationships
User.associate(sequelize.models)
UserRole.associate(sequelize.models)

connection.sequelize = sequelize
connection.Sequelize = Sequelize
connection.sequelizeTransaction = sequelize.transaction()

module.exports = connection
