import { app } from "./app";
import * as http from 'http';
import {MongoHelper} from "./mongo.helper";

const PORT = 8080
const server = http.createServer(app)
server.listen(PORT)
server.on('listening',
    async () => { console.info(`Listening on port ${PORT}`)
      try {
      await MongoHelper.connect('mongodb+srv://lidji:123qwe987@cluster0.fyoyi.mongodb.net/db?retryWrites=true&w=majority')
      console.info('Connected to Mongo')
      } catch (e) {
      console.error(e)
      }
});