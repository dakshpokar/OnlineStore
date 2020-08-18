import { NgModule } from '@angular/core';
import { StoreComponent } from './store.component';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { CartSummaryComponent } from './cartsummary.component';
import { CartDetailComponent } from './cartDetail.component';
import { CheckoutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        StoreComponent,
        CartSummaryComponent,
        CartDetailComponent,
        CheckoutComponent
    ],
    providers: [],
    imports: [ModelModule, BrowserModule, RouterModule],
    exports: [
        StoreComponent,
        CartDetailComponent,
        CheckoutComponent
    ]
})
export class StoreModule {

}