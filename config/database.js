import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
let sequelize;
  sequelize = new Sequelize(process.env.DB_NAME_DEV, process.env.DB_USER_DEV, process.env.DB_PASS_DEV, {
    host: process.env.DB_HOST_DEV,
    dialect: "postgres",
    port: process.env.DB_PORT_DEV
  });
export default sequelize;

