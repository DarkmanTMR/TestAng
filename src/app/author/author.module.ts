import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import {AuthorsComponent} from "./authors/authors.component";
import {AuthorComponent} from "./author/author.component";
import {AuthorDetailsComponent} from "./author-details/author-details.component";
import {HttpClientModule} from "@angular/common/http";
import { AuthorsBooksComponent } from './authors-books/authors-books.component';


@NgModule({
  declarations: [
    AuthorsComponent,
    AuthorComponent,
    AuthorDetailsComponent,
    AuthorsBooksComponent
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    HttpClientModule
  ]
})
export class AuthorModule { }
