import {requestLoggerMiddleware} from "./request.logger.middleware";
import { Request, Response, NextFunction } from 'express'

const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyparser.json());

app.use(requestLoggerMiddleware);

app.get('/todo', (req: Request, resp: Response, next: NextFunction) => {
  resp.json([{id: 1, description: 'Byy Bread'}])
});

app.post('/todo', (req: Request, resp: Response, next: NextFunction) => {
  console.info(req.body)
  resp.end();
});

app.put('/todo/:id', (req: Request, resp: Response, next: NextFunction) => {
  console.info(req.body);
  console.info(req.params.id);
  resp.end()
});

app.delete('/todo/:id', (req: Request, resp: Response, next: NextFunction) => {
  console.info(req.params.id);
  resp.end()
});

export { app };
