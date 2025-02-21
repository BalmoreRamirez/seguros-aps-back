// src/models/Club_miembros.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Club from './Club.js';
import Miembro from './Miembro.js';

const Club_miembros = sequelize.define('Club_miembros', {
  id_club: {
    type: DataTypes.INTEGER,
    references: {
      model: Club,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  id_miembro: {
    type: DataTypes.INTEGER,
    references: {
      model: Miembro,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
});

export default Club_miembros;