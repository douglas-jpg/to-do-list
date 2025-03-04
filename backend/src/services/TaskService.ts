import { ITaskRepository, ITaskService } from '../@types/protocols';
import { ITask } from '../@types/tasks';

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
            throw new Error(`Falha ao buscar tarefa: ${(error as Error).message}`);
        }
    }
}