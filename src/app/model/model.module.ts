import { NgModule } from '@angular/core';
import { ProductDataSource } from './product.datasource';
import { ProductRepository } from './product.repository';
import { Cart } from './cart.model';
import { OrderRepository } from './order.repository';
import { Order } from './order.model';

@NgModule({
    declarations: [],
    providers: [ProductDataSource, ProductRepository, Cart, Order, OrderRepository],
    imports: [],
    exports: []
})
export class ModelModule{
    
}