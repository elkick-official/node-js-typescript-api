import { Sequelize } from 'sequelize/types'
const { DataTypes, Model } = require('sequelize')

class Role extends Model {
  static init(sequelize: Sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
        },
        name: DataTypes.STRING,
      },
      {
        tableName: 'roles',
        sequelize,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      },
    )
  }
}
export { Role }
