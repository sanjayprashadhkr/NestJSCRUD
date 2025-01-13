import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { title } from 'process';

@Injectable()
export class TasksService {
    private tasks:Task[] = [
    ];
    
    getAllTasks() {
        return this.tasks;
    }
    createTask(createTaskDto:CreateTaskDto):Task
    {
        const {description,title}=createTaskDto;
        const task:Task={
            id:uuid(),
            description,
            title,
            status:TaskStatus.OPEN
        }
        this.tasks.push(task);
        return task;
    }
    deleteTask(id: string): string {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index === -1) {
            return "Task not found";
        }
        this.tasks.splice(index, 1);
        return "Task deleted successfully";
    }
 
}
