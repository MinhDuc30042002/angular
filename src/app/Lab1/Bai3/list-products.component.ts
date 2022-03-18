import { Component } from "@angular/core";
import { ListProduct } from "./products";

@Component({
    selector: 'app-list-products',
    templateUrl: './list-products.component.html',
    styleUrls: ['./list-products.component.css']
})


export class ListProductsComponent
{
    products = ListProduct
}
