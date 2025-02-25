import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Club_miembros from './Club_miembros.js';

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
  edad: {
    type: DataTypes.INTEGER,
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

// Define associations
Miembro.hasMany(Club_miembros, { foreignKey: 'id_miembro' });

export default Miembro;