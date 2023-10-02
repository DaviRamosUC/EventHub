import { DataSource } from 'typeorm'

const AppDataSource: DataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: '1234',
  database: 'eventHub',
  entities: ['./src/app/Eventos/entities/EventoEntity.ts'],
  migrations: ['./src/database/migrations/*.ts'],
  logging: true,
  synchronize: true,
})

AppDataSource.initialize()
  .then(async () => {
    console.log('Connection initialized with database...')
  })
  .catch((error: any) => console.log(error))

export const getDataSource = (): DataSource => {
  return AppDataSource
}
