import { Product } from "./product.model"
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Order } from './order.model';

@Injectable()
export class ProductDataSource {
    private products: Product[] = [
        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", Math.floor(Math.random() * 1000) + 1, "https://picsum.photos/600/400?a"),
        new Product(2, "Product 2", "Category 1", "Product 2 (Category 1)", Math.floor(Math.random() * 1000) + 1, "https://picsum.photos/600/400?aa"),
        new Product(3, "Product 3", "Category 1", "Product 3 (Category 1)", Math.floor(Math.random() * 1000) + 1, "https://picsum.photos/600/400?asa"),
        new Product(4, "Product 4", "Category 1", "Product 4 (Category 1)", Math.floor(Math.random() * 1000) + 1, "https://picsum.photos/600/400?sas"),
        new Product(5, "Product 5", "Category 1", "Product 5 (Category 1)", Math.floor(Math.random() * 1000) + 1, "https://picsum.photos/600/400?qw1"),
        new Product(6, "Product 6", "Category 2", "Product 6 (Category 2)", Math.floor(Math.random() * 1000) + 1, "https://picsum.photos/600/400?mals"),
        new Product(7, "Product 7", "Category 2", "Product 7 (Category 2)", Math.floor(Math.random() * 1000) + 1, "https://picsum.photos/600/400?asqd"),
        new Product(8, "Product 8", "Category 2", "Product 8 (Category 2)", Math.floor(Math.random() * 1000) + 1, "https://picsum.photos/600/400?e21e21"),
        new Product(9, "Product 9", "Category 2", "Product 9 (Category 2)", Math.floor(Math.random() * 1000) + 1, "https://picsum.photos/600/400?sasaxc"),
        new Product(10, "Product 10", "Category 2", "Product 10 (Category 2)", Math.floor(Math.random() * 1000) + 1, "https://picsum.photos/600/400?lsa"),
        new Product(11, "Product 11", "Category 3", "Product 11 (Category 3)", Math.floor(Math.random() * 1000) + 1, "https://picsum.photos/600/400?dlsad"),
        new Product(12, "Product 12", "Category 3", "Product 12 (Category 3)", Math.floor(Math.random() * 1000) + 1, "https://picsum.photos/600/400?12dd"),
        new Product(13, "Product 13", "Category 3", "Product 13 (Category 3)", Math.floor(Math.random() * 1000) + 1, "https://picsum.photos/600/400?fd12"),
        new Product(14, "Product 14", "Category 3", "Product 14 (Category 3)", Math.floor(Math.random() * 1000) + 1, "https://picsum.photos/600/400?1234"),
        new Product(15, "Product 15", "Category 3", "Product 15 (Category 3)", Math.floor(Math.random() * 1000) + 1, "https://picsum.photos/600/400?ccda2"),
    ];

    getProducts():Observable<Product[]> {
        return from([this.products]);
    }

    saveOrder(order:Order):Observable<Order>{
        console.log(JSON.stringify(order)); 
        return from([order])
    }
}