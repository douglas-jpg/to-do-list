import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { MongoClient } from './database/mongo';

import { TaskController } from './controllers/TaskController';
import { TaskService } from './services/TaskService';
import { TaskRepository } from './repositories/TaskRepository';

dotenv.config();

const main = async () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    await MongoClient.connect();

    app.get('/', (req: Request, res: Response) => {
        res.send('Hello World');
    });

    app.get('/tasks', async (req: Request, res: Response) => {
        const taskRepository = new TaskRepository();
        const taskService = new TaskService(taskRepository);
        const tasksController = new TaskController(taskService);

        const { data, statusCode } = await tasksController.listAllTask();

        res.status(statusCode).send(data);
    });

    app.get('/tasks/:id', async (req: Request, res: Response) => {
        const { id } = req.params;
        const taskRepository = new TaskRepository();
        const taskService = new TaskService(taskRepository);
        const tasksController = new TaskController(taskService);

        const { data, statusCode } = await tasksController.getTaskById(id);

        res.status(statusCode).send(data);
    });

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Server Rodando na Porta: ${PORT}`);
        console.log(`http://localhost:${PORT}`);
    });
};

main();
