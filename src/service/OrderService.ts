import {OrderIFC} from "../interfaces/OrderIFC";
import prisma from "../database/prisma";
import {ErrorCustom} from "../errors/ErrorCustom";
import {StatusEnum} from "../enums/StatusEnum";
import {io} from "../app";

export class OrderService {
    async show(){
        try {
            // @ts-ignore
            const ordersWithProducts = await prisma.order.findMany({
                include: {
                    products: {
                        include: {
                            product: true
                        }
                    }
                }
                });

            return ordersWithProducts;
        }catch (error){
            if(error instanceof ErrorCustom){
                throw new ErrorCustom(error.message,error.statusCode)
            }
        }
    }

    async create({table, products}: OrderIFC){
        try {
            const order = await prisma.order.create({
                data: {
                    table,
                    products: {
                        create: products
                    }
                },
                include: {
                    products: true
                }
            });

            const orderDetails = await prisma.order.findUnique({
                include: {
                    products: {
                        include: {
                            product: true
                        }
                    }
                },
                where: {
                    id: order.id
                }
            });

            io.emit("orders@new",orderDetails)

            return orderDetails;
        }catch (error){
            if(error instanceof ErrorCustom){
                throw new ErrorCustom(error.message,error.statusCode)
            }
        }

    }

    async update(orderId: string,status:StatusEnum){
        try {
            const order = await prisma.order.update({
                data:{
                    status
                },
                where: {
                    id: orderId
                }
            })

            return order;
        }catch (error){
            if(error instanceof ErrorCustom){
                throw new ErrorCustom(error.message,error.statusCode)
            }
        }
    }

    async delete(orderId: string){
        try {
            const order = await prisma.order.delete({
                where: {
                    id: orderId
                }
            })

            return order;
        }catch (error){
            if(error instanceof ErrorCustom){
                throw new ErrorCustom(error.message,error.statusCode)
            }
        }
    }
}