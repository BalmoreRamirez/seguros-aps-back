// src/models/Club.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Usuario from "./Usuario.js";

const Club = sequelize.define("Club", {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  iglesia: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  distrito: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  zona: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  pastor: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,
      key: "id"
    },
    unique: true
  }
}, {
  tableName: "clubs",
  timestamps: false
});
Club.belongsTo(Usuario, { foreignKey: "id_usuario" });

export default Club;