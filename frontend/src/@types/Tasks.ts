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

export interface CreatedTask {
    title: string;
    description?: string;
    priority: Priority;
}

export interface TaskContextState {
    tasks: ITask[];
    isLoading: boolean;
    error: string | null;
    priorityFilter: PriorityFilter;
}

export interface TaskContextActions {
    setPriorityFilter: (priority: PriorityFilter) => void;
    createTask: (task: Partial<ITask>) => Promise<void>;
    deleteTask: (id: string) => Promise<void>;
    toggleTask: (id: string) => Promise<void>;
}

export type PriorityFilter = Priority | 'todos';
export type TaskContextType = TaskContextState & TaskContextActions;
