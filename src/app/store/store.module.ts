import { NgModule } from '@angular/core';
import { StoreComponent } from './store.component';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { CartSummaryComponent } from './cartsummary.component';
import { CartDetailComponent } from './cartDetail.component';
import { CheckoutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        StoreComponent,
        CartSummaryComponent,
        CartDetailComponent,
        CheckoutComponent
    ],
    providers: [],
    imports: [
        ModelModule, 
        BrowserModule, 
        RouterModule,
        FormsModule
    ],
    exports: [
        StoreComponent,
        CartDetailComponent,
        CheckoutComponent
    ]
})
export class StoreModule {

}