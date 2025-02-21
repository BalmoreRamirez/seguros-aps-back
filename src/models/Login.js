import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Login = sequelize.define('Login', {
  user: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rol: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Login;
