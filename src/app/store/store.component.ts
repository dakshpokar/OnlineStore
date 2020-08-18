import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';
import { Cart } from '../model/cart.model';
import { Router } from '@angular/router';

@Component({
    selector: 'store',
    templateUrl: './store.component.html',
})
export class StoreComponent{

    //used to hold user selected category from view
    public selectedCategory = null;
    public productsPerPage = 3;
    public selectedPage = 1;
    public grid = !true;

    constructor(
        private repository:ProductRepository, 
        private cart: Cart, 
        private router: Router
    ){}

    get products() : Product[]{
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this
                .repository
                .getProducts(this.selectedCategory)
                .slice(pageIndex, pageIndex + this.productsPerPage)
    }

    get categories() : string[]{
        return this.repository.getCategories();
    }

    changedCategory(category ?: string){
        this.selectedCategory = category;
        this.changePage(1)
    }

    changePage(newPage : number){
        this.selectedPage = newPage
    }

    changePageSize(newSize : number){
        this.productsPerPage = Number(newSize)
        this.changePage(1)
    }
    
    get pageNumbers():number[]{
        return Array(
            Math.ceil(
                this
                .repository
                .getProducts(this.selectedCategory).length / this.productsPerPage
                )
            ).fill(0).map((x, i) => i + 1)
    }

    toggleView(type : string) {
        if(type == 'list'){
            this.grid = false;
        }else{
            this.grid = true;
        }
    }

    addProductToCart(product: Product){
        this.cart.addLine(product, 1)
        // this.router.navigateByUrl("/cart")
    }

}