import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './entities/task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() task: Task): Promise<Task> {
    return this.tasksService.create(task);
  }

  @Get()
  async findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Task | string> {
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() task: Task): Promise<Task | string> {
    return this.tasksService.update(id, task);
  }

  @Delete(':id')
  async remove(@Param('id') id: string){
    return this.tasksService.remove(id);
  }
}
