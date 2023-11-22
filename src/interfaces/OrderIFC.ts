import { ProductOrderIFC} from "./ProductOrderIFC";
import {StatusEnum} from "../enums/StatusEnum";

export interface OrderIFC {
    table: string;
    products: ProductOrderIFC[]
}

export interface OrderUpdateIFC {
    status: StatusEnum
}