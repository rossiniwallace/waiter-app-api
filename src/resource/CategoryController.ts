import {CategoryService} from "../service/CategoryService";
import {Response, Request} from "express";
import {CategoryIFC} from "../interfaces/CategoryIFC";
import {ErrorCustom} from "../errors/ErrorCustom";

const categoryService = new CategoryService();
export class CategoryController {

    async show(_req:Request, res: Response){
        await categoryService.show()
            .then((categories: CategoryIFC[] | undefined) => {
                res.status(200).json(categories)
            }).catch((error) => {
                if (error instanceof ErrorCustom) {
                    throw new ErrorCustom(error.message, error.statusCode);
                }
            })
    }

    async create(req:Request, res: Response){
        const body: CategoryIFC = req.body;

        await categoryService.create(body)
            .then((category) => {
                res.status(201).json(category)
            }).catch((error) => {
                if (error instanceof ErrorCustom) {
                    throw new ErrorCustom(error.message, error.statusCode);
                }
            })
    }
}
