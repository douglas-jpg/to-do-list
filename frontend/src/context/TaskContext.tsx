import axios, { AxiosInstance } from 'axios';

import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

import {
    ITask,
    Priority,
    PriorityFilter,
    TaskContextState,
    TaskContextType,
} from '../@types/Tasks';

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

const PRIORITY_ORDER: Record<Priority, number> = {
    alta: 3,
    media: 2,
    baixa: 1,
};

const TaskContext = createContext<TaskContextType | null>(null);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<TaskContextState>({
        tasks: [],
        isLoading: true,
        error: null,
        priorityFilter: 'todos',
    });

    const sortedTasks = useMemo(() => {
        return sortTasks(state.tasks, state.priorityFilter);
    }, [state.tasks, state.priorityFilter]);

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const { data } = await api.get<ITask[]>('/tasks');
                setState((prev) => ({
                    ...prev,
                    tasks: data,
                    isLoading: false,
                    error: null,
                }));
            } catch (error) {
                handleError('Erro ao carregar tarefas:', error);
            }
        };

        loadTasks();
    }, []);

    const handleError = (message: string, error: unknown) => {
        console.error(message, error);
        setState((prev) => ({
            ...prev,
            isLoading: false,
            error: error instanceof Error ? error.message : 'Erro desconhecido',
        }));
    };

    const createTask = async (taskData: Partial<ITask>) => {
        try {
            setState((prev) => ({ ...prev, isLoading: true }));

            const { data } = await api.post<ITask>('/task', taskData);

            setState((prev) => ({
                ...prev,
                tasks: [...prev.tasks, data],
                isLoading: false,
                error: null,
            }));
        } catch (error) {
            handleError('Erro ao criar tarefa:', error);
        }
    };

    const deleteTask = async (id: string) => {
        try {
            setState((prev) => ({ ...prev, isLoading: true }));

            await api.delete(`/task/${id}`);

            setState((prev) => ({
                ...prev,
                tasks: prev.tasks.filter((task) => task.id !== id),
                isLoading: false,
            }));
        } catch (error) {
            handleError('Erro ao excluir tarefa:', error);
        }
    };

    const toggleTask = async (id: string) => {
        try {
            setState((prev) => ({
                ...prev,
                tasks: prev.tasks.map((task) =>
                    task.id === id ? { ...task, done: !task.done } : task
                ),
            }));

            await api.patch(`/task/${id}/done`);
        } catch (error) {
            handleError('Erro ao atualizar tarefa:', error);
            setState((prev) => ({
                ...prev,
                tasks: prev.tasks.map((task) =>
                    task.id === id ? { ...task, done: !task.done } : task
                ),
            }));
        }
    };

    const setPriorityFilter = (priority: PriorityFilter) => {
        setState((prev) => ({ ...prev, priorityFilter: priority }));
    };

    const value: TaskContextType = {
        ...state,
        tasks: sortedTasks,
        setPriorityFilter,
        createTask,
        deleteTask,
        toggleTask,
    };

    return (
        <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
    );
};

const sortTasks = (tasks: ITask[], filter: PriorityFilter): ITask[] => {
    const filteredTasks =
        filter === 'todos'
            ? tasks
            : tasks.filter((task) => task.priority === filter);

    return [...filteredTasks].sort((a, b) => {
        if (!a.done && b.done) return -1;
        if (a.done && !b.done) return 1;

        return PRIORITY_ORDER[b.priority] - PRIORITY_ORDER[a.priority];
    });
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTasks = (): TaskContextType => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTasks deve ser usado dentro de um TaskProvider');
    }
    return context;
};
