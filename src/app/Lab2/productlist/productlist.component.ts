import { Component, Directive, OnInit } from '@angular/core';
import { ProductList } from '../entities/product';

@Component({
  selector: 'app-list',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class AppListComponent {
  
  products = ProductList;
  
  constructor() {}


  ngOnInit(): void {
      this.products
  }
  filterValue: string = '';

  filter() {}
}
