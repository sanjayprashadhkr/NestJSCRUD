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
    getTaskById(id:string):Task
    {
        return this.tasks.find((task)=>task.id===id);
    }
    deleteTaskById(id:string):string
    {
        this.tasks = this.tasks.filter(task => task.id !== id);
        return "Deleted Successfully";
    }
    updateStatusById(id:string , status:TaskStatus):Task
    {
        const task =this.getTaskById(id);
        task.status=status;
        return task;
    }
 
}
