import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Miembro = sequelize.define(
  'Miembro',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    primer_nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    segundo_nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    primer_apellido: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    segundo_apellido: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING(15),
    },
    is_alergico_a: {
      type: DataTypes.TEXT(50),
    },
    enfermedad_padese: {
      type: DataTypes.TEXT(50),
    },
    medicamento_receta: {
      type: DataTypes.TEXT(150),
    },
    edad: {
      type: DataTypes.INTEGER,
    },
    nombres_responsable: {
      type: DataTypes.STRING(50),
    },
    apellidos_responsable: {
      type: DataTypes.STRING(50),
    },
    telefono_responsable: {
      type: DataTypes.STRING(15),
    },
    parentesco_responsable: {
      type: DataTypes.STRING(50),
    },
    pago_seguro: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: 'miembros',
    timestamps: false,
  },
);

(async () => {
  const Club_miembros = (await import('./Club_miembros.js')).default;
  Miembro.hasMany(Club_miembros, { foreignKey: 'id_miembro' });
})();

export default Miembro;
