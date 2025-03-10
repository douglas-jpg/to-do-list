export interface ITask {
    id: string;
    title: string;
    description?: string;
    done: boolean;
    priority: 'baixa' | 'media' | 'alta';
    createdAt: string;
    updatedAt: string;
}
