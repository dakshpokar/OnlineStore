import { NgModule } from '@angular/core';
import { ProductDataSource } from './product.datasource';
import { ProductRepository } from './product.repository';
import { Cart } from './cart.model';

@NgModule({
    declarations: [],
    providers: [ProductDataSource, ProductRepository, Cart],
    imports: [],
    exports: []
})
export class ModelModule{
    
}