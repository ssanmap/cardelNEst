import { IsOptional, IsString, isUUID } from "class-validator";

export class UpdateCarDto {

    @IsString()
    @IsOptional()
    readonly id: string;

    @IsString()
    @IsOptional()
   readonly make?: string;

   @IsString()
   @IsOptional()
   readonly model?: string;

   
   @IsString()
   @IsOptional()
   readonly  year?: number;
}