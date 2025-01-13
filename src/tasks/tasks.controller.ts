import { Body, Controller,Delete,Get, Param, Post , Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus} from './tasks.model';
import { title } from 'process';
import { CreateTaskDto } from './dto/create-task.dto';

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
  
  @Get(":id")
  getTaskById(@Param("id") id:string):Task
  {
    console.log("This is getting called");
    return this.tasksService.getTaskById(id);
  }
  @Post()
  createTask(@Body() createTaskDto:CreateTaskDto)
  {
    return this.tasksService.createTask(createTaskDto);

  }
  @Delete(":id")
  deleteTask(@Param("id") id:string):string
  {
    console.log("This is getting called");
    return this.tasksService.deleteTaskById(id);
  }
  @Patch(":id/status")
  updateStatusById(@Param("id") id:string , @Body("status") status:TaskStatus)
  {
      return this.tasksService.updateStatusById(id,status);
  }

}
