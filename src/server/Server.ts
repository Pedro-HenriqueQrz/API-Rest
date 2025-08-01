import express from 'express';
import 'dotenv/config';

import './shared/services/TranslationsYup';
import router from './routes/index.js';

const server = express();
server.use(express.json());

server.use(router);


export {server};

