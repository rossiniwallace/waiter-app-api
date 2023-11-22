import {ErrorCustom} from "../errors/ErrorCustom";
import { CategoryIFC} from "../interfaces/CategoryIFC";
import prisma from "../database/prisma";

export class CategoryService {

    async show(){
        try {
            const categories: CategoryIFC[] = await prisma.category.findMany()
            return categories;
        }catch (error){
            if(error instanceof ErrorCustom){
                throw new ErrorCustom(error.message,error.statusCode)
            }
        }
    }

    async create(data: CategoryIFC){
        try {
            console.log(data)
            const category = await prisma.category.create({data})
            return category;
        }catch (error){
            if(error instanceof ErrorCustom){
                throw new ErrorCustom(error.message,error.statusCode)
            }
        }
    }
}