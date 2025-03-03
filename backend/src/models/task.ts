import { Schema, model } from 'mongoose';
import { ITask, TaskPriority } from '../@types/tasks';

const TaskSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Titulo Obrigatorio'],
            trim: true,
            maxlength: [100, 'O título nao pode exceder 100 caracteres'],
            minlength: [3, 'O título deve ter no mínimo 3 caracteres'],
        },
        description: {
            type: String,
            trim: true,
            maxlength: [500, 'A descrição não pode exceder 500 caracteres'],
        },
        completed: {
            type: Boolean,
            default: false,
        },
        priority: {
            type: String,
            enum: Object.values(TaskPriority),
            default: TaskPriority.LOW,
        },
    },
    { timestamps: true }
);

export const Task = model<ITask>('Task', TaskSchema);
