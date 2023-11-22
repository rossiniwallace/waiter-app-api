import {IngredientsIFC} from "./IngredientsIFC";

export interface ProductCreatedIFC {
    id?: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imagePath: string;
    ingredients: string
}

export interface ProductIFC {
    id?: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imagePath: string;
    ingredients: IngredientsIFC[]
}