import { Sequelize } from 'sequelize/types'
const { DataTypes, Model } = require('sequelize')
export class User extends Model {
  static init(sequelize: Sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
        },
        first_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        last_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        user_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isEmail: true,
          },
          unique: {
            args: true,
            msg: 'The email has already been taken.',
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        tableName: 'users',
        sequelize,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      },
    )
  }

  static associate(models: any) {
    this.hasOne(models.UserRole, { foreignKey: 'id' })
  }
}
