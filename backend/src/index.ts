import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { MongoClient } from './database/mongo';
import { router } from './routes/routes';

dotenv.config();

const main = async () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    await MongoClient.connect();

    app.use(router);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server Rodando`);
    });
};

main();
