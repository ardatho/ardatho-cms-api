declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly BASE_URL: string;
      readonly PORT: string;

      readonly MYSQL_DB_HOST: string;
      readonly MYSQL_DB_PORT: string;
      readonly MYSQL_DB_NAME: string;
      readonly MYSQL_DB_USER: string;
      readonly MYSQL_DB_PASSWORD: string;

      readonly JWT_SECRET: string;
    }
  }
}

export {};
