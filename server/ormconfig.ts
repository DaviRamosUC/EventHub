import { DataSource } from "typeorm"

const myDataSource: any = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "1234",
    database: "eventHub",
    entities: ["./src/app/*.ts"],
    migrations: ['./src/database/migrations/*.ts'],
    logging: true,
    synchronize: true,
  })

export default myDataSource