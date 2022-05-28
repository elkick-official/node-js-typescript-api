import { Sequelize } from 'sequelize/types'
const { DataTypes, Model } = require('sequelize')

export class UserRole extends Model {
  static init(sequelize: Sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
        },
        user_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        role_id: { type: DataTypes.UUID, allowNull: false },
      },
      {
        tableName: 'user_roles',
        sequelize,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      },
    )
  }
  static associate(models: any) {
    this.belongsTo(models.User, { foreignKey: 'id' })
  }
}
