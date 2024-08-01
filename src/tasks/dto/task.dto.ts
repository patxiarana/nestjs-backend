import { taskStatus } from "../task.entity";
import { IsNotEmpty, IsOptional, IsString, Min, MinLength } from "class-validator";

export class CreateTaskDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title:string;
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    description:string; 

}

export class UpdateTaskDTO  {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title?:string;
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    description?:string; 
    status?:taskStatus; 
}