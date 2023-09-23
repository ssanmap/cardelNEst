import { Injectable } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import {v4 as uuid} from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
            id: uuid(),
            make: 'Toyota',
            model: 'Corolla',
            year: 2019,
        },
        {
            id: uuid(),
            make: 'Honda',
            model: 'Civic',
            year: 2018,
        },
        {
            id: uuid(),
            make: 'Honda',
            model: 'Accord',
            year: 2017,
        },
    ];

    findAll() {
        return this.cars;
    }
    findbyId(id: string) {
     
      const car = this.cars.find((car) => car.id === id);
      if (!car) {
        throw new Error('Car not found');
      }
      return car;
    }

    createCar(CreateCarDto:CreateCarDto) {
        
        const newCar:Car = {
            id: uuid(),
            ...CreateCarDto,
        };
        this.cars.push(newCar);
        return newCar;
    }

    updateCar(id: string, UpdateCarDto: UpdateCarDto) {
        const car = this.findbyId(id);
        const index = this.cars.findIndex((car) => car.id === id);
        this.cars[index] = {
            ...car,
            ...UpdateCarDto,
        };
        return this.cars[index];
        
    }
    deleteCar(id: string) {
        const car = this.findbyId(id);
        this.cars = this.cars.filter((car) => car.id !== id);
        return `Car ${id} has been deleted`;
    }
}
