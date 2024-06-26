import { ProductDataSource } from './product.datasource';
import { Product } from './product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductRepository{
    private products: Product[] = [];
    private categories: string[] = [];

    constructor(private dataSource: ProductDataSource){
        dataSource.getProducts().subscribe(data => {
            this.products = data;
            this.categories = data.map(p => p.category)
                                    .filter((c, index, array)=>array.indexOf(c) == index)
                                    .sort()
        })
    }

    getProducts(category: string = null){
        return this.products.filter(p=>category==null || category==p.category)
    }

    getProduct(id: number): Product{
        return this.products.find(p=>id = p.id)
    }

    getCategories(): string[]{
        return this.categories
    }
}