import { Body, Controller , Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
constructor(
    private readonly carsService: CarsService,
) {}

@Get()
findAll(): any {
        return this.carsService.findAll();
    }
@Get(':id')
getCarById( @Param('id', new ParseUUIDPipe({ version: '4'})) id : string) {
    console.log({id});
        return this.carsService.findbyId(id);
    }    

@Post()
createCar(@Body() createCardDto:CreateCarDto ): any {
    return this.carsService.createCar(createCardDto);
}    
@Patch(':id')
updateCar(@Param('id', ParseUUIDPipe) id: string,
 @Body() updateCarDto:UpdateCarDto): any {
    return this.carsService.updateCar(id, updateCarDto);

}

@Delete(':id')
deleteCar(@Param('id', ParseUUIDPipe) id: string): any {
    return  this.carsService.deleteCar(id);
}

}
