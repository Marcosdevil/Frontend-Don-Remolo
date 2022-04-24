import { Product } from './product'

export class ProductSearchResponse{       
    total_items: number;
    products: Array<Product>;
 
    
    constructor(total_items: number, products: Array<Product>){
        this.total_items = total_items;
        this.products = products;
    }
    

}