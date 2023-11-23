import { Router } from "express";
import {CategoryController} from "./resource/CategoryController";
import {ProductController} from "./resource/ProductController";
import {OrderController} from "./resource/OrderController";
import multer from "multer";
import MulterConfig from "./config/MulterConfig";
export const router = Router();

const upload = multer(MulterConfig)

const categoryCtrl = new CategoryController();
const productCtrl = new ProductController();
const orderCtrl = new OrderController();

router.post("/categories",categoryCtrl.create)
router.get("/categories",categoryCtrl.show)
router.get("/categories/:categoryId/products",productCtrl.listProductsByCategory);

router.post("/products",upload.single("image"), productCtrl.create);
router.get("/products",productCtrl.show);

router.get("/orders",orderCtrl.show)
router.post("/orders",orderCtrl.create)
router.patch("/orders/:orderId",orderCtrl.update)
router.delete("/orders/:orderId",orderCtrl.delete)