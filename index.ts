import express, { Express, Request, Response } from "express";
import nordPoolRouter from "./nordpool";
import cors from "cors";
import bodyParser from "body-parser";

const app: Express = express();

app.use(cors({
    origin: ['http://localhost:3006']
}));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', nordPoolRouter);

app.listen(3001,() => {
    console.log(`[server]: Server is running at http://localhost:3001`);
});