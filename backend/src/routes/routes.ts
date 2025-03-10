import { Router, Request, Response } from 'express';

import { TaskRepository } from '../repositories/TaskRepository';
import { TaskService } from '../services/TaskService';
import { TaskController } from '../controllers/TaskController';

export const router = Router();

const taskRepository = new TaskRepository();
const taskService = new TaskService(taskRepository);
const tasksController = new TaskController(taskService);

router.get('/', async (req: Request, res: Response) => {
    try {
        const { data, statusCode } = await tasksController.listAllTask();

        res.status(statusCode).send(data);
    } catch (error) {
        res.status(500).send(`Erro interno: ${(error as Error).message}`);
    }
});

router.get('/tasks', async (req: Request, res: Response) => {
    try {
        const { data, statusCode } = await tasksController.listAllTask();

        res.status(statusCode).send(data);
    } catch (error) {
        res.status(500).send(`Erro interno: ${(error as Error).message}`);
    }
});

router.get('/task/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { data, statusCode } = await tasksController.getTaskById(id);
        res.status(statusCode).send(data);
    } catch (error) {
        res.status(500).send(`Erro interno: ${(error as Error).message}`);
    }
});

router.post('/task', async (req: Request, res: Response) => {
    try {
        const { title, description, priority } = req.body;
        const { data, statusCode } = await tasksController.createTask({
            title,
            description,
            priority,
        });
        res.status(statusCode).send(data);
    } catch (error) {
        res.status(500).send(`Erro interno: ${(error as Error).message}`);
    }
});

router.delete('/task/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { data, statusCode } = await tasksController.deleteTask(id);
        res.status(statusCode).send(data);
    } catch (error) {
        res.status(500).send(`Erro interno: ${(error as Error).message}`);
    }
});

// router.put('/task/:id', async (req: Request, res: Response) => {
//     try {
//         const { id } = req.params;
//         const { title, description, priority } = req.body;
//         const { data, statusCode } = await tasksController.updateTask(id, {
//             title,
//             description,
//             priority,
//         });
//         res.status(statusCode).send(data);
//     } catch (error) {
//         res.status(500).send(`Erro interno: ${(error as Error).message}`);
//     }
// });
