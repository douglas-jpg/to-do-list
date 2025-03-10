import { ITaskRepository, ITaskService } from '../@types/protocols';
import { ICreateTaskParams, ITask } from '../@types/tasks';

export class TaskService implements ITaskService {
    constructor(private readonly taskRepository: ITaskRepository) {}

    async listAllTasks(): Promise<ITask[]> {
        return this.taskRepository.listAllTasks();
    }

    async getTaskById(id: string): Promise<ITask> {
        try {
            if (!id) throw new Error('ID inválido');

            const task = await this.taskRepository.getTaskById(id);
            if (!task) throw new Error('Tarefa não encontrada');

            return task;
        } catch (error) {
            throw new Error(
                `Falha ao buscar tarefa: ${(error as Error).message}`
            );
        }
    }

    async createTask(param: ICreateTaskParams): Promise<ITask> {
        try {
            if (
                !param.title ||
                typeof param.title !== 'string' ||
                param.title.trim().length < 3 ||
                param.title.trim().length > 100
            ) {
                throw new Error(
                    'Titulo invalido: deve ter entre 3 e 100 caracteres'
                );
            }

            if (
                param.description &&
                (typeof param.description !== 'string' ||
                    param.description.trim().length > 500)
            ) {
                throw new Error(
                    'Descricao invalida: deve ter no maximo 500 caracteres'
                );
            }

            if (!param.priority || typeof param.priority !== 'string') {
                throw new Error(
                    'Prioridade invalida: deve ser um dos valores permitidos.'
                );
            }

            const task: Omit<ITask, 'id'> = {
                title: param.title.trim(),
                description: param.description
                    ? param.description.trim()
                    : undefined,
                done: false,
                priority: param.priority,
                createdAt: new Date(),
                updatedAt: new Date(),
            };

            return await this.taskRepository.createTask(task);
        } catch (error) {
            throw new Error(
                `Falha ao criar tarefa: ${(error as Error).message}`
            );
        }
    }

    deleteTask(id: string): Promise<ITask> {
        try {
            if (!id) throw new Error('ID inválido');

            const task = this.taskRepository.getTaskById(id);
            if (!task) throw new Error('Tarefa não encontrada');

            return this.taskRepository.deleteTask(id);

        } catch (error) {
            throw new Error(
                `Falha ao deletar tarefa: ${(error as Error).message}`
            );
        }
    }
}
