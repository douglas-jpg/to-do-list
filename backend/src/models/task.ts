import { Schema, model, Document } from 'mongoose';

enum TaskPriority {
    LOW = 'baixa',
    MEDIUM = 'média',
    HIGH = 'alta',
}

export interface ITask extends Document {
    title: string;
    description?: string;
    done: boolean;
    priority: TaskPriority;
    createdAt: Date;
    updatedAt: Date;
}

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
