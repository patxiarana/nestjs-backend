import { Injectable } from '@nestjs/common';
import { Task, taskStatus } from './task.entity';
import { v4 } from 'uuid';

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
    updateTask(){}
}
