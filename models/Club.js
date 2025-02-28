// src/models/Club.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Login from "./Login.js";

const Club = sequelize.define("Club", {
  iglesia: {
    type: DataTypes.STRING,
    allowNull: false
  },
  distrito: {
    type: DataTypes.STRING,
    allowNull: false
  },
  zona: {
    type: DataTypes.STRING,
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pastor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  loginId: {
    type: DataTypes.INTEGER,
    references: {
      model:Login,
      key: "id"
    }
  }
}, {
  tableName: "clubs",
  timestamps: false
});
Club.belongsTo(Login, { foreignKey: "loginId" });

export default Club;