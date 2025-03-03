import { Document } from "mongoose";

export enum TaskPriority {
    LOW = 'baixa',
    MEDIUM = 'média',
    HIGH = 'alta',
}

export interface ITask extends Document {
    title: string;
    description?: string;
    done: boolean;
    priority: TaskPriority;
    createdAt: Date;
    updatedAt: Date;
}


