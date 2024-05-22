import type { Knex } from "knex";
import * as dotenv from 'dotenv';

// Update with your config settings.

dotenv.config();

const config: Knex.Config = {
  client: "mysql2",
  connection: {
    host: process.env.MYSQL_DB_HOST || '__MYSQL_DB_HOST__',
    port: parseInt(process.env.MYSQL_DB_PORT || '3306'),
    user: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
  },
  migrations: {
    tableName: 'migrations'
  }
};

export default config;
