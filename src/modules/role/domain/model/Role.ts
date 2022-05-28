import { Sequelize } from 'sequelize/types'
const { DataTypes, Model } = require('sequelize')

export class Role extends Model {
  static init(sequelize: Sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
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
