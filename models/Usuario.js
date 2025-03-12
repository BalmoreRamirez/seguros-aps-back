import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Role from './Role.js';

const Usuario = sequelize.define(
  'Usuario',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    user: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    complete_club: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    id_role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Role,
        key: 'id',
      },
    },
  },
  {
    tableName: 'Usuarios',
    timestamps: false,
  },
);
Usuario.belongsTo(Role, { foreignKey: 'id_role' });
export default Usuario;
