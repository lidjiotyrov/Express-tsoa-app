import { Connection, createConnection } from 'typeorm'

import { MongoConnectionOptions } from "typeorm/driver/mongodb/MongoConnectionOptions";


export const databaseConfig = {
  type: "mongodb" as const,
    url: "mongodb+srv://lidji:123qwe987@cluster0.fyoyi.mongodb.net/db?retryWrites=true&w=majority",
    useNewUrlParser: true,
    synchronize: true,
    logging: true,
    entities: ["src/**/*.*"]
}

export class DatabaseManager {
  connection: Connection

  async createDatabaseConnection(): Promise<any> {

    const connectionOptions: MongoConnectionOptions = databaseConfig
    return createConnection(connectionOptions)
        .then((connection) => {
          console.log('Made a DB connection')
          this.connection = connection
        })
        .catch((error) => {
          console.log(error)
          throw error
        })
  }
}

export default new DatabaseManager()