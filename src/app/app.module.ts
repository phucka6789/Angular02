import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

//page
import { PageHomeComponent }  from './page/home/home.component';
import{PageContactComponent} from'./page/contact/contact.component';
import{PageRegisterComponent} from'./page/register/register.component';
import{PageSingleComponent}   from'./page/single/single.component';

//widgets
import {ModuleHeaderComponent} from'./widgets/header/header.component';
import {ModuleFooterComponent}  from'./widgets/footer/footer.component';
//Module
import {ModuleMenuleftComponent} from'./modules/menuleft/menuleft.component';
import  {ModuleBananerComponent} from'./modules/bananer/bananer.component';
import {ModuleProductItem01Component} from'./modules/product_Item_01/product_item_01.component';
import {ModuleProductItem02Component} from'./modules/product_Item_02/product_item_02.component';
import {ModuleProductItem03Component} from'./modules/product_Item_03/product_item_03.component';



@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ,

  //page
              PageHomeComponent,
              PageContactComponent,
              PageRegisterComponent,
              PageSingleComponent,

//module
              ModuleMenuleftComponent,
              ModuleBananerComponent,
              ModuleProductItem01Component,
              ModuleProductItem02Component,
              ModuleProductItem03Component,
   //widgets
              ModuleHeaderComponent,
              ModuleFooterComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
