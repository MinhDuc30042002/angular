import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Student } from './Lab1/Bai1/lab1.component';
import { InventorsListComponent } from './Lab1/Bai2/list-inventors.component';
import { ListProductsComponent } from './Lab1/Bai3/list-products.component';
import { Lab1Component } from './Lab1/lab1.component';
import { Lab2Component } from './Lab2/lab2.component';
import { HeaderComponent } from './Lab2/header/header.component';
import { AppListComponent } from './Lab2/productlist/productlist.component';

@NgModule({
  declarations: [
    AppComponent,
    Student,
    InventorsListComponent,
    ListProductsComponent,
    Lab1Component,
    Lab2Component,
    HeaderComponent,
    AppListComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
