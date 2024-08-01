import { taskStatus } from "../task.entity";
import { IsNotEmpty, IsString, Min } from "class-validator";

export class CreateTaskDTO {
    @IsString()
    @IsNotEmpty()
    @Min(3)
    title:string;
    @IsString()
    @IsNotEmpty()
    @Min(3)
    description:string; 

}

export class UpdateTaskDTO  {
    title?:string;
    description?:string; 
    status?:taskStatus; 
}