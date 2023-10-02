import { DataSource } from 'typeorm'

export const AppDataSource: DataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'eventHub',
  entities: ['./src/app/Eventos/entities/EventoEntity.ts'],
  migrations: ['./src/database/migrations/*.ts'],
  logging: true,
  synchronize: true,
})
