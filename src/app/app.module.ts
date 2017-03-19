import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

//page
import { PageHomeComponent }  from './page/home/home.component';

//widgets
import {ModuleHeaderComponent} from'./widgets/header/header.component';
import {ModuleFooterComponent}  from'./widgets/footer/footer.component';
import {ModuleMenuleftComponent} from'./modules/menuleft/menuleft.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ,

  //page
              PageHomeComponent,

//module
              ModuleMenuleftComponent,
   //widgets
              ModuleHeaderComponent,
              ModuleFooterComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
