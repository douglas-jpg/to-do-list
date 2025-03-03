import { ITask } from './tasks';

export interface ITaskController {
    listAllTask(): Promise<HttpResponse<ITask[]>>;
}

export interface ITaskRepository {
    listAllTask(): Promise<ITask[]>;
}

export interface HttpResponse<T> {
    statusCode: number;
    data: T | string;
}
