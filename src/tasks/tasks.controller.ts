import { Body, Controller,Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task} from './tasks.model';
import { title } from 'process';

@Controller('tasks')
export class TasksController {
    private tasksService:TasksService;

  constructor(tasksService: TasksService) 
  {

    this.tasksService=tasksService;
  }

  @Get()
    getAllTasks():Task[] {
        return this.tasksService.getAllTasks();
    }
  @Post()
  createTask(@Body('title') title:string,@Body('description') description:string):Task{

    return this.tasksService.createTask(description,title);

  }

  //Delete a task by providing the id value in the key-value pair from the delete request
  @Post('delete')
  deleteTask(@Body('id') id:string):string
  {
    return this.tasksService.deleteTask(id);
  }
}
