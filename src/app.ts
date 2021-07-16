import {requestLoggerMiddleware} from "./request.logger.middleware";
import {RegisterRoutes} from "../build/routes";
import swaggerUi from 'swagger-ui-express'

const express = require('express');
const bodyparser = require('body-parser');
const swaggerData =require('./swagger.json')
const swaggerConfig = {
  swaggerOptions: {
    displayOperationId: true,
  },
}
export const app = express();
app.use(
    bodyparser.urlencoded({
      extended: true,
    })
);
app.use('/api-docs', swaggerUi.serve)
app.get('/api-docs',  swaggerUi.setup(swaggerData, swaggerConfig))
app.use(bodyparser.json());
app.use(requestLoggerMiddleware);


RegisterRoutes(app);
