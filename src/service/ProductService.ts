import {ProductIFC} from "../interfaces/ProductIFC";
import prisma from "../database/prisma";
import {ErrorCustom} from "../errors/ErrorCustom";

export class ProductService {

    async show(){
        try {
            // @ts-ignore
            const products = await prisma.product.findMany();

            products.forEach(item => item.ingredients = JSON.parse(item.ingredients)) ;

            return products
        }catch (error){
            if(error instanceof ErrorCustom){
                throw new ErrorCustom(error.message,error.statusCode)
            }
        }
    }

    async listProductsByCategory(category: string){
        try {
            // @ts-ignore
            const products = await prisma.product.findMany({where: {
                    category
                }});

            products.forEach(item => item.ingredients = JSON.parse(item.ingredients)) ;

            return products
        }catch (error){
            if(error instanceof ErrorCustom){
                throw new ErrorCustom(error.message,error.statusCode)
            }
        }
    }
    async create(data:ProductIFC){
        try {
            // @ts-ignore
            const product = await prisma.product.create({data})

            return product
        }catch (error){
            if(error instanceof ErrorCustom){
                throw new ErrorCustom(error.message,error.statusCode)
            }
        }
    }
}