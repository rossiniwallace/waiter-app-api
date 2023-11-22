import {ProductIFC} from "./ProductIFC";

export interface ProductOrderIFC  {
    productId: string
    quantity: number
    product: ProductIFC | string
}