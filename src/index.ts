import { app } from "./app";
import * as http from 'http';
import databaseManager from './database'

const PORT = 8080
const server = http.createServer(app)
server.listen(PORT)
server.on('listening',
    async () => { console.info(`Listening on port ${PORT}`)
      try {
      await databaseManager.createDatabaseConnection()
      console.info('Connected to Mongo')
      } catch (e) {
      console.error(e)
      }
});