import App from './app'
import config from './config'
import { AppDataSource } from './data-source'

AppDataSource.initialize().then(async () => {
  console.log('Connected to database')
  new App().listen(config.port)
})
