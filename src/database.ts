import { Connection, createConnection } from 'typeorm'

import { MongoConnectionOptions } from "typeorm/driver/mongodb/MongoConnectionOptions";


export const databaseConfig = {
  type: "mongodb" as const,
    url: "mongodb+srv://lidji:1997Lidzhi1997Warcraft1997@cluster1.fyoyi.mongodb.net/rt?retryWrites=true&w=majority",
    synchronize: true,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
    ssl:true
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