import { Sequelize } from "sequelize/types";
const { DataTypes, Model } = require("sequelize");

class UserRole extends Model {
  static init(sequelize: Sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
        },
        user_id: DataTypes.UUID,
        role_id: DataTypes.UUID,
      },
      {
        tableName:"user_roles",
        sequelize,
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
  }
  static associate(models:any){
    this.belongsTo(models.User,{foreignKey:"id"})
  }
}
export { UserRole };
