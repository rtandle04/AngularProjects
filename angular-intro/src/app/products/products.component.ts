import { Component } from '@angular/core';

@Component({
    selector : 'app-products',
    templateUrl: 'products.component.html'
})
export class ProductsComponent{
    productNames : string[] = [];
    p :string='';
    onAddClick(newProductName : string){
        this.productNames.push(newProductName);
    }

    onRemoveClick(productName : string){
        this.productNames = this.productNames.filter(product => product !== productName);
        /* this.productNames.splice(this.productNames.indexOf(productName), 1); */
    }

    onSerarch(productName : string){
        
    }
}