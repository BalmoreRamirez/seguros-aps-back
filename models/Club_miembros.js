// src/models/Club_miembros.js
    import { DataTypes } from 'sequelize';
    import sequelize from '../config/database.js';
    const Club_miembros = sequelize.define('Club_miembros', {
      id_club: {
        type: DataTypes.INTEGER,
        references: {
          model: 'clubs',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      id_miembro: {
        type: DataTypes.INTEGER,
        references: {
          model: 'miembros',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    });

    export default Club_miembros;