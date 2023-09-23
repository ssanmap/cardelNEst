import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import {v4 as uuid} from 'uuid'

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Nike',
      createdAt: Date.now(),
      
    }
  ];
  create(createBrandDto: CreateBrandDto) {
    const {name} = createBrandDto;
    const newBrand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createdAt: Date.now(),
    };
    this.brands.push(newBrand);
   
    return newBrand;
  }

  findAll() {
    return this.brands;
    // return `This action returns all brands`;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if(!brand) throw new Error('Brand not found');
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
  
   this.brands = this.brands.map(brand => {
      if(brand.id === id){
        brandDB.updatedAt = new Date().getTime();
       brandDB = { ...brandDB, ...updateBrandDto };
        return brandDB;
      }
      return brand;
    });
    return brandDB;
  }

  remove(id: string) {
    this.brands = this.brands.filter(brand => brand.id !== id);
    return `This action removes a #${id} brand`;
  }
}
