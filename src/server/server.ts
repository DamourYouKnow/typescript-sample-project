import * as path from 'path';
import express, { Express } from 'express';

const app: Express = express();
const port = 8080;

app.use(express.static(path.join(__dirname, '../../public')));

app.listen(port);
console.log(`Listening on http://localhost:${port}`);
