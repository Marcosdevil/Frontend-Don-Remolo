import { ModuleWithProviders } from '@angular/core';     //import para rotuer
import { Routes, RouterModule } from '@angular/router';  //import para rotuer


//import  

import { VistaProductoPizzasComponent } from './vista-producto-pizzas/vista-producto-pizzas.component';   //importo la clase de cada componente
import { CategoriesComponent } from './categories/categories.component';
import { VistaProductoEmpanadasComponent } from './vista-producto-empanadas/vista-producto-empanadas.component';
import { VistaProductoPostresComponent } from './vista-producto-postres/vista-producto-postres.component';
import { ProductsComponent } from './products/products.component';


 
const appRoutes: Routes = [                                     //configuracion de cada ruta
    {path: '', component: CategoriesComponent},
    {path: 'pizzas', component: VistaProductoPizzasComponent}, //definir rutas
    {path: 'empanadas', component: VistaProductoEmpanadasComponent},
    {path: 'postres', component: VistaProductoPostresComponent},
    {path: 'bebidas', component: ProductsComponent},
    {path: '**', component: CategoriesComponent},
    
];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes); // agregar <any>


