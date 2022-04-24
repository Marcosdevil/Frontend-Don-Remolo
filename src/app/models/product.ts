export class Product{       
        _id?: number;
        name: string;
        price: number;
        stock: number;
        image: string;
        categorie: string; 
        
        constructor(name: string, price: number, stock: number, image: string, categorie: string ){
            this.name = name;
            this.price = price;
            this.stock = stock;
            this.image = image;
            this.categorie = categorie;
        }
        

}
