import {Request, Response} from "express";
import {ErrorCustom} from "../errors/ErrorCustom";
import {ProductService} from "../service/ProductService";
import {UploadFileService} from "../service/UploadFileService";
// import {ProductIFC} from "../interfaces/ProductIFC";

const productService = new ProductService();

export class ProductController {

    async show(_req: Request, res: Response) {
        await productService.show()
            .then((products) => {
                res.status(200).json(products)
            }).catch((error) => {
                if (error instanceof ErrorCustom) {
                    throw new ErrorCustom(error.message, error.statusCode);
                }
            })
    }

    async listProductsByCategory(req: Request, res: Response) {
        const {categoryId} = req.params
        await productService.listProductsByCategory(categoryId)
            .then((products) => {
                res.status(200).json(products)
            }).catch((error) => {
                if (error instanceof ErrorCustom) {
                    throw new ErrorCustom(error.message, error.statusCode);
                }
            })
    }

    async create(req: Request, res: Response) {
        const {body, file} = req;

        const uploadImageService = new UploadFileService();

        if(file!==undefined){
            const url = await uploadImageService.execute(file);

            body.imagePath = url

            await productService.create(body)
                .then((category) => {
                    return res.status(201).json(category)
                }).catch((error) => {
                    if (error instanceof ErrorCustom) {
                        throw new ErrorCustom(error.message, error.statusCode);
                    }
                })
        }
    }
}