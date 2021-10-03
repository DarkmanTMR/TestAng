import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import {BookComponent} from "./book/book.component";
import {BooksComponent} from "./books/books.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {HttpClientModule} from "@angular/common/http";
import { BooksAuthorsComponent } from './books-authors/books-authors.component';


@NgModule({
  declarations: [
    BookComponent,
    BooksComponent,
    BookDetailsComponent,
    BooksAuthorsComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    HttpClientModule
  ]

})
export class BookModule { }
