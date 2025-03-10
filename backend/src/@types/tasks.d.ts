import { Document } from 'mongoose';

export enum TaskPriority {
    LOW = 'baixa',
    MEDIUM = 'media',
    HIGH = 'alta',
}

export interface ITask {
    id: string;
    title: string;
    description?: string;
    done: boolean;
    priority: TaskPriority;
    createdAt: Date;
    updatedAt: Date;
}

export interface ICreateTaskParams {
    title: string;
    description?: string;
    priority: TaskPriority;
}
