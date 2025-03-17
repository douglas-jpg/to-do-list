export type Priority = 'baixa' | 'media' | 'alta';

export interface ITask {
    id: string;
    title: string;
    description?: string;
    done: boolean;
    priority: Priority;
    createdAt: string;
    updatedAt: string;
}

export interface createdTask {
    title: string;
    description?: string;
    priority: Priority;
}