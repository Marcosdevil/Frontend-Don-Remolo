import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
//import 'rxjs/add/operator/maps';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { GLOBAL } from './global'

//@Injectable ()                   // definir decorardor @Injectable a la clase, para poder importar (mediante la injeccion de dep.) llevar este servicio en otras clases
export class ProductService{   //aca creamos la clase que podemos usar fuera de este fichero
    public url: string;  //metodos que necesitamos   //vamos a crear un fchero de confg. global de la URL para reutilizarla continuamente. global.ts

    constructor(private _http: Http){                //asignarle un valor al cargar este servicio
        this.url = GLOBAL.url;     //la url va a tener el valor que tenga global

    }
    signup(){
        return 'hola mundo desde el servicio';
    }

 
}

