import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {

  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async create(task: Task) {
    const createdTask = new this.taskModel(task);
    return await createdTask.save();
  }

  async findAll() {
    return await this.taskModel.find().exec();
  }

  async findOne(id: string) {
    return await this.taskModel.findById(id).exec();
  }

  async update(id: string, task: Task) {
    await this.taskModel.updateOne({_id: id}, task).exec()
    return this.findOne(id);
  }

  async remove(id: string) {
    return await this.taskModel.deleteOne({_id: id}).exec()
  }
}
