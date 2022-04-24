import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  listProducts: Product [] = [];                     //ACA declaro el producto, Ver si esta bien

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.obtenerProducts();
  }

  obtenerProducts() {
    this._productService.getProducts().subscribe(data => {
      console.log(data);
      this.listProducts = data;
    }, error => {
      console.log(error);
    })
  }

}
