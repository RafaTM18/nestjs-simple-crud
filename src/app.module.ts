import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:master123@mongocluster.hvspeje.mongodb.net/?retryWrites=true&w=majority'),
    TasksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
