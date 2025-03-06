import { ITaskRepository } from '../@types/protocols';
import { ITask } from '../@types/tasks';
import { MongoClient } from '../database/mongo';
import { ObjectId } from 'mongodb';

export class TaskRepository implements ITaskRepository {
    async listAllTasks(): Promise<ITask[]> {
        const tasks = await MongoClient.db
            .collection<Omit<ITask, 'id'>>('tasks')
            .find({})
            .toArray();

        return tasks.map(
            ({ _id, ...rest }: { _id: any; [key: string]: any }) => ({
                ...rest,
                id: _id.toHexString(),
            })
        );
    }
    async getTaskById(id: string): Promise<ITask> {
        const task = await MongoClient.db
            .collection('tasks')
            .findOne({ _id: new ObjectId(id) });

        if (!task) {
            throw new Error('Tarefa não encontrada');
        }

        const { _id, ...rest } = task;
        return { id: _id.toHexString(), ...rest };
    }

    async createTask(task: Omit<ITask, 'id'>): Promise<ITask> {
        try {
            const { insertedId } = await MongoClient.db
                .collection('tasks')
                .insertOne(task);

            const newTask = await MongoClient.db
                .collection<Omit<ITask, 'id'>>('tasks')
                .findOne({ _id: insertedId });

            if (!newTask) {
                throw new Error('Task não encontrada apos a inserção.');
            }

            const { _id, ...rest } = newTask;
            return { id: _id.toHexString(), ...rest };
        } catch (error) {
            throw new Error(`Erro ao criar task: ${(error as Error).message}`);
        }
    }
}
