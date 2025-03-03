import { ITask } from './tasks';

export interface ITaskController {
    listAllTask(): Promise<HttpResponse<ITask[]>>;
    getTaskById(id: string): Promise<HttpResponse<ITask>>;
}

export interface ITaskRepository {
    listAllTask(): Promise<ITask[]>;
    getTaskById(id: string): Promise<ITask>;
}

export interface HttpResponse<T> {
    statusCode: number;
    data: T | string;
}
