import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';

export const CARS_SEED:Car[] = [
    {
        id:uuid(),
        make: 'Toyota',
        model: 'Corolla',
    },
    {
        id:uuid(),
        make: 'Honda',
        model: 'Civic',
    },
    {
        id:uuid(),
        make: 'Honda',
        model: 'Accord',
    },
]