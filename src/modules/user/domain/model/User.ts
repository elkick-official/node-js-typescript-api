import { Sequelize } from "sequelize/types";
const { DataTypes, Model } = require("sequelize");
const PROTECTED_ATTRIBUTES = ["password"];
class User extends Model {
  
  static init(sequelize: Sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
        },
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        user_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      {
        tableName:"users",
        sequelize,
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
    
  }

  static associate(models: any){
    this.hasOne(models.UserRole,{ foreignKey:"id" })
  }
}
export { User };
