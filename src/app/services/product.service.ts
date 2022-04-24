import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductSearchResponse } from '../models/product.search.response';
import { map } from 'rxjs/operators'; 

@Injectable({
    providedIn: 'root'
})
export class ProductService{

    pageNum = 1;

    url = 'http://localhost:3977/api/products/'+ this.pageNum;

    constructor(private http: HttpClient) { }
    
    getProducts(): Observable<any> {

        return this.http.get<ProductSearchResponse>(this.url).pipe(map((res:ProductSearchResponse)=>{return res.products}));

    }
};