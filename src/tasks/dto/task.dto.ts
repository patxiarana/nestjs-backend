import { taskStatus } from "../task.entity";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTaskDTO {
    @IsString()
    @IsNotEmpty()
    title:string;
    @IsString()
    @IsNotEmpty()
    description:string; 

}

export class UpdateTaskDTO  {
    title?:string;
    description?:string; 
    status?:taskStatus; 
}