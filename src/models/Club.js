// src/models/Club.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Club = sequelize.define('Club', {
  iglesia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  distrito: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zona: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pastor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Club;