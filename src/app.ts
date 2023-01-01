import express, { NextFunction, Request, Response } from 'express'
import routes from './routes';
import helmet from 'helmet'

const app = express();

app.use(helmet());

app.use(express.json());

app.get("/", (req, res) => res.sendStatus(200));

app.listen(3000, () => {
    console.log(`this server is running http://localhost:3000`);
});