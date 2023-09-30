import { DataSource } from "typeorm";

const AppDataSource: any = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "1234",
  database: "eventHub",
  entities: ["./src/app/Eventos/entities/EventoEntity.ts"],
  migrations: ["./src/database/migrations/*.ts"],
  logging: true,
  synchronize: true,
});

AppDataSource.initialize()
  .then(async () => {
    console.log("Connection initialized with database...");
  })
  .catch((error: any) => console.log(error));

export const getDataSource = async (delay = 3000): Promise<DataSource> => {
  if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (AppDataSource.isInitialized) resolve(AppDataSource);
      else reject("Failed to create connection with database");
    }, delay);
  });
};
