import express from 'express';
import loggingMiddleWare from './logging/loggingMiddleware';
import { errorHandler } from './errorHandling/errorMiddleware';
import routes from './routers';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(loggingMiddleWare);
app.use(express.json());

routes.forEach((routerInfo) => {
	app.use(routerInfo.route, routerInfo.router);
});

app.use(errorHandler);

/* eslint-disable no-console */
app.listen(5050, () => console.log(`Listening on port: ${5050}`));
