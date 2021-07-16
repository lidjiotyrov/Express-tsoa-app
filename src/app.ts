import {requestLoggerMiddleware} from "./request.logger.middleware";
import {RegisterRoutes} from "../build/routes";

const express = require('express');
const bodyparser = require('body-parser');

export const app = express();
app.use(
    bodyparser.urlencoded({
      extended: true,
    })
);
app.use(bodyparser.json());
app.use(requestLoggerMiddleware);


RegisterRoutes(app);
