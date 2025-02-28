import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Role from "./Role.js";

const Login = sequelize.define("Login", {
  user: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  roleId: {
    type: DataTypes.INTEGER,
    references: {
      model: Role,
      key: "id"
    }
  }
},{
  tableName: "logins",
  timestamps: false
});
Login.belongsTo(Role, { foreignKey: "roleId" });
export default Login;
