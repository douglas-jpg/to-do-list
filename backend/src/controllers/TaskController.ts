import { ITaskController, ITaskRepository } from '../@types/protocols';

export class TaskController implements ITaskController {
    constructor(private readonly TaskRepository: ITaskRepository) {}

    async listAllTask() {
        try {
            const tasks = await this.TaskRepository.listAllTask();
            return {
                statusCode: 200,
                data: tasks,
            };
        } catch (error) {
            return {
                statusCode: 500,
                data: `Algo deu Errado: ${error}`,
            };
        }
    }

    async getTaskById(id: string) {
        try {
            const task = await this.TaskRepository.getTaskById(id);
            return {
                statusCode: 200,
                data: task,
            };
        } catch (error) {
            return {
                statusCode: 500,
                data: `Algo deu Errado: ${error}`,
            };
        }
    }
}
