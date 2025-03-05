import { ITaskRepository } from '../@types/protocols';
import { ITask } from '../@types/tasks';
import { MongoClient } from '../database/mongo';

export class TaskRepository implements ITaskRepository {
    async listAllTasks(): Promise<ITask[]> {
        const tasks = await MongoClient.db
            .collection<Omit<ITask, 'id'>>('tasks')
            .find({})
            .toArray();

        return tasks.map(({ _id, ...rest }: { _id: any; [key: string]: any }) => ({
            ...rest,
            id: _id.toHexString(),
        }));
    }
    async getTaskById(id: string): Promise<ITask> {
        throw new Error('Method not implemented.');
    }
}
