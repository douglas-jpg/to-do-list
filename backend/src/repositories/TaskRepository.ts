import { ITaskRepository } from '../@types/protocols';
import { ITask } from '../@types/tasks';

export class TaskRepository implements ITaskRepository {
    async listAllTasks(): Promise<ITask[]> {
        throw new Error('Method not implemented.');
    }
    async getTaskById(id: string): Promise<ITask> {
        throw new Error('Method not implemented.');
    }
}
