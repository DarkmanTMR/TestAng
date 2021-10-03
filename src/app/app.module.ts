import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutesModule} from "./app-routes.module";



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
