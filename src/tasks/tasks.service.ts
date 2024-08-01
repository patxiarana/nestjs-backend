import { Injectable } from '@nestjs/common';
import { Task, taskStatus } from './task.entity';
import { v4 } from 'uuid';
import { UpdateTaskDTO } from './dto/task.dto';

@Injectable()
export class TasksService {
    //simulate db
  private tasks:Task[] =  [{
        id:'1',
        title:'Task 1',
        description:'This is task 1 description',
        status:taskStatus.PENDING
     
    }]




    getAllTasks(){
        return this.tasks ; 
    }
    createTask(title:string, description:string,){
        const task = {
            id: v4(), 
            title,
            description,
            status:taskStatus.PENDING
        }
        this.tasks.push(task)

        return task;
    }
    deleteTask(id:string){
     this.tasks =  this.tasks.filter(task => task.id !== id)
    }

    getTaskById(id:string):Task { {
      return this.tasks.find( task => task.id === id )
    }
    }


    updateTask(id:string, updatedFields:UpdateTaskDTO): Task{
      const task =  this.getTaskById(id)
    const newTask =  Object.assign(task, updatedFields)
    this.tasks = this.tasks.map(task => task.id === id ? newTask : task)

    return newTask; 
    }
}
