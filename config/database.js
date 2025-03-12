import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
let sequelize;
if (process.env.MODE === 'production') {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.DB_HOST,
      dialect: 'postgres',
      port: process.env.DB_PORT,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
      logging: false,
    },
  );
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME_DEV,
    process.env.DB_USER_DEV,
    process.env.DB_PASS_DEV,
    {
      host: process.env.DB_HOST_DEV,
      dialect: 'postgres',
      port: process.env.DB_PORT_DEV,
    },
  );
}
export default sequelize;
