import { Order } from './order.model';
import { Observable, from } from 'rxjs';
import { ProductDataSource } from './product.datasource';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderRepository{
    private orders: Order[] = [];
    constructor(private dataSource:ProductDataSource){}

    getOrders():Order[]{
        return this.orders;
    }

    saveOrder(order:Order):Observable<Order>{
        return this.dataSource.saveOrder(order);
    }
}