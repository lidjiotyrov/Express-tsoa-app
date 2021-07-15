import {requestLoggerMiddleware} from "./request.logger.middleware";
import { Request, Response, NextFunction } from 'express'

const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(
    bodyparser.urlencoded({
      extended: true,
    })
);
app.use(bodyparser.json());
app.use(requestLoggerMiddleware);

app.get('/todo', (req: Request, resp: Response, next: NextFunction) => {
  resp.json([{id: 1, description: 'Byy Bread'}])
});

export { app };
