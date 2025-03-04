import { ITaskController, ITaskService } from '../@types/protocols';

export class TaskController implements ITaskController {
    constructor(private taskService: ITaskService) {}

    async listAllTask() {
        try {
            const tasks = await this.taskService.listAllTasks();
            return {
                statusCode: 200,
                data: tasks,
            };
        } catch (error) {
            return {
                statusCode: 500,
                data: `Erro interno: ${error}`,
            };
        }
    }

    async getTaskById(id: string) {
        try {
            const task = await this.taskService.getTaskById(id);
            return {
                statusCode: 200,
                data: task,
            };
        } catch (error) {
            return {
                statusCode: 500,
                data: `Erro interno: ${(error as Error).message}`,
            };
        }
    }
}
