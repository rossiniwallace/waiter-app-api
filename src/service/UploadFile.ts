import multer from "multer";
import { Request } from "express";
import path from "node:path";

export const uploadMulter = multer({
    storage : multer.diskStorage({
        destination(_req: Request,_file: Express.Multer.File, callback){
            callback(null,path.resolve(__dirname,"..","..","uploads"));
        },
        filename(_req: Request, file: Express.Multer.File, callback: (error: (Error | null), filename: string) => void) {
            callback(null,`${Date.now()}-${file.originalname}`);
        }
    })
})
