import { ITaskController, ITaskService } from '../@types/protocols';
import { ICreateTaskParams, ITask } from '../@types/tasks';

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

    async createTask(param: ICreateTaskParams) {
        try {
            const task = await this.taskService.createTask(param);
            return {
                statusCode: 201,
                data: task,
            };
        } catch (error) {
            return {
                statusCode: 500,
                data: `Erro interno: ${(error as Error).message}`,
            };
        }
    }

    async deleteTask(id: string) {
        try {
            const task = await this.taskService.deleteTask(id);
            return {
                statusCode: 200,
                data: task,
            };
        } catch (error) {
            throw new Error(
                `Erro ao deletar task: ${(error as Error).message}`
            );
        }
    }

    async updateTask(id: string, param: ICreateTaskParams) {
        try {
            const updatedTask = await this.taskService.updateTask(id, param);
            return {
                statusCode: 200,
                data: updatedTask,
            };
        } catch (error) {
            return {
                statusCode: 500,
                data: `Erro interno: ${(error as Error).message}`,
            };
        }
    }
}
