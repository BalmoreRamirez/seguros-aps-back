import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Miembro from './Miembro.js';

const Club_miembros = sequelize.define('Club_miembros', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  id_club: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'clubs',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  id_miembro: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'miembros',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
});
Club_miembros.belongsTo(Miembro, { foreignKey: 'id_miembro' });
export default Club_miembros;
