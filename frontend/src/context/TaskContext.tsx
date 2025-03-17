import axios, { AxiosInstance } from 'axios';

import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';
import { ITask } from '../@types/Tasks';

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

interface ITaskContext {
    api: AxiosInstance;
    tasks: ITask[];
    isLoading: boolean;
    selectedPriority: string;
    setSelectedPriority: (priority: string) => void;
    createTask: (task: ITask) => Promise<ITask>;
    deleteTask: (id: string) => Promise<ITask>;
    toggleTask: (id: string) => Promise<ITask>;
}

const TaskContext = createContext<ITaskContext | null>(null);

export const TaskContextProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedPriority, setSelectedPriority] = useState<string>('todos');

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const tasksData = await getTasks();
                const sortedTasks = sortTasks(tasksData, selectedPriority);
                setTasks(sortedTasks);
            } catch (error) {
                console.error('Erro ao carregar tarefas:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTasks();
    }, [selectedPriority]);

    const getTasks = async (): Promise<ITask[]> => {
        try {
            const response = await api.get('/tasks');
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar tarefas:', error);
            throw error;
        }
    };

    const createTask = async (task: Partial<ITask>) => {
        try {
            const response = await api.post('/task', task);
            const newTasks = sortTasks(
                [...tasks, response.data],
                selectedPriority
            );
            setTasks(newTasks);
            return response.data;
        } catch (error) {
            console.error('Erro ao criar tarefa:', error);
            throw error;
        }
    };

    const deleteTask = async (id: string) => {
        try {
            const response = await api.delete(`/task/${id}`);
            setTasks((prevTasks) => {
                const filteredTasks = prevTasks.filter(
                    (task) => task.id !== id
                );
                return sortTasks(filteredTasks, selectedPriority);
            });
            return response.data;
        } catch (error) {
            console.error('Erro ao deletar tarefa:', error);
            throw error;
        }
    };

    const toggleTask = async (id: string) => {
        try {
            const response = await api.patch(`/task/${id}/done`);
            const updatedTasks = tasks.map((task) =>
                task.id === id ? response.data : task
            );
            setTasks(sortTasks(updatedTasks, selectedPriority));
            return response.data;
        } catch (error) {
            console.error('Erro ao alternar status da tarefa:', error);
            throw error;
        }
    };

    const sortTasks = (tasksToSort: ITask[], priority: string): ITask[] => {
        const priorityOrder = { alta: 3, media: 2, baixa: 1 };

        return tasksToSort.sort((a, b) => {
            if (!a.done && b.done) return -1;
            if (a.done && !b.done) return 1;

            if (priority !== 'todos') {
                const aIsSelected = a.priority === priority;
                const bIsSelected = b.priority === priority;

                if (aIsSelected && !bIsSelected) return -1;
                if (!aIsSelected && bIsSelected) return 1;
            }

            return priorityOrder[b.priority] - priorityOrder[a.priority];
        });
    };

    const values = {
        api,
        tasks,
        isLoading,
        selectedPriority,
        createTask,
        deleteTask,
        toggleTask,
        setSelectedPriority,
    };

    return (
        <TaskContext.Provider value={values}>{children}</TaskContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useApi deve ser usado dentro de um ApiProvider');
    }
    return context;
};
