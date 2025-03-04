import { ITaskRepository } from '../@types/protocols';
import { ITask } from '../@types/tasks';

export class TaskRepository implements ITaskRepository {
    async listAllTask(): Promise<ITask[]> {
        throw new Error('Method not implemented.');
    }
    getTaskById(id: string): Promise<ITask> {
        throw new Error('Method not implemented.');
    }
}
