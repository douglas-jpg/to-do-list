import { MongoClient as Mongo } from 'mongodb';
import { ICreateTaskParams, ITask } from './tasks';

export interface HttpResponse<T> {
    statusCode: number;
    data: T | string;
}

export interface IMongoClient {
    client: Mongo | null;
    db: Db | null;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
}

export interface ITaskRepository {
    listAllTasks(): Promise<ITask[]>;
    getTaskById(id: string): Promise<ITask>;
    createTask(ITaks): Promise<ITask>;
    deleteTask(id: string): Promise<ITask>;
}

export interface ITaskService {
    listAllTasks(): Promise<ITask[]>;
    getTaskById(id: string): Promise<ITask>;
    createTask(param: ICreateTaskParams): Promise<ITask>;
    deleteTask(id: string): Promise<ITask>;
}

export interface ITaskController {
    listAllTask(): Promise<HttpResponse<ITask[]>>;
    getTaskById(id: string): Promise<HttpResponse<ITask>>;
    createTask(param: ICreateTaskParams): Promise<HttpResponse<ITask>>;
    deleteTask(id: string): Promise<HttpResponse<ITask>>;
}
