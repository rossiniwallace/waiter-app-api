import {OrderService} from "../service/OrderService";
import {Request, Response} from "express";
import {ErrorCustom} from "../errors/ErrorCustom";
import {OrderIFC, OrderUpdateIFC} from "../interfaces/OrderIFC";

const orderService = new OrderService();

export class OrderController {

    async show(_req: Request, res: Response) {

        await orderService.show()
            .then((order) => {
                res.status(201).json(order)
            }).catch((error) => {
                if (error instanceof ErrorCustom) {
                    throw new ErrorCustom(error.message, error.statusCode);
                }
            })
    }

    async create(req: Request, res: Response) {
        const body: OrderIFC = req.body;

        await orderService.create(body)
            .then((order) => {
                res.status(200).json(order)
            }).catch((error) => {
                if (error instanceof ErrorCustom) {
                    throw new ErrorCustom(error.message, error.statusCode);
                }
            })
    }

    async update(req: Request, res: Response) {
        const {status}: OrderUpdateIFC = req.body;
        const {orderId} = req.params

        await orderService.update(orderId, status)
            .then((order) => {
                res.status(200).json(order)
            }).catch((error) => {
                if (error instanceof ErrorCustom) {
                    throw new ErrorCustom(error.message, error.statusCode);
                }
            })
    }
    async delete(req: Request, res: Response) {
        const {orderId} = req.params

        await orderService.delete(orderId)
            .then((order) => {
                res.status(200).json(order)
            }).catch((error) => {
                if (error instanceof ErrorCustom) {
                    throw new ErrorCustom(error.message, error.statusCode);
                }
            })
    }

}