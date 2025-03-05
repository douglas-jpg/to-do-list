import { ITaskRepository } from '../@types/protocols';
import { ITask } from '../@types/tasks';
import { MongoClient } from '../database/mongo';

export class TaskRepository implements ITaskRepository {
    async listAllTasks(): Promise<ITask[]> {
        const tasks = await MongoClient.db
            .collection<Omit<ITask, 'id'>>('tasks')
            .find({})
            .toArray();

        return tasks.map(
            ({ _id, ...rest }: { _id: any; [key: string]: any }) => ({
                ...rest,
                id: _id.toHexString(),
            })
        );
    }
    async getTaskById(id: string): Promise<ITask> {
        const task = await MongoClient.db
            .collection('tasks')
            .findOne({ _id: id });

        task.id = task._id.toHexString();
        delete task._id;

        return task;
    }
}
