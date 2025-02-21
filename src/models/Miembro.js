// src/models/Miembro.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Miembro = sequelize.define('Miembro', {
  nombres: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellidos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
  },
  is_alergico_a: {
    type: DataTypes.TEXT,
  },
  enfermedad_padese: {
    type: DataTypes.TEXT,
  },
  medicamento_receta: {
    type: DataTypes.TEXT,
  },
  fecha_nacimiento: {
    type: DataTypes.DATE,
  },
  nombres_responsable: {
    type: DataTypes.STRING,
  },
  apellidos_responsable: {
    type: DataTypes.STRING,
  },
  telefono_responsable: {
    type: DataTypes.STRING,
  },
  parentesco_responsable: {
    type: DataTypes.STRING,
  },
  pago_seguro: {
    type: DataTypes.BOOLEAN,
  },
});

export default Miembro;