import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';  //importar modelo
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService] // aca ser cargan todos los servicios
})
export class AppComponent implements OnInit{
  public title = 'DonRemolo';
  public product: Product; //objeto product, tipo product

  constructor(                                    //para asignarle un valor a un clase
    private _productService:ProductService
  ){  
        this.product = new product ('','','','','');  //objeto vacio para ir rellenarlo y depsue sutilizarlo, es necesario en nuetro aso?
  }

  public onSubmit(){
    console.log(this.product);
  }

  ngOnInit(){


  }



}
