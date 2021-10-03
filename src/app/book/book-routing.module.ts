import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksComponent} from "./books/books.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {BooksAuthorsComponent} from "./books-authors/books-authors.component";

const routes: Routes = [
  {path: '', component: BooksComponent},
  {path: 'books', component: BooksComponent},
  {path: ':id', component: BookDetailsComponent},
  {path: ':id/authors', component: BooksAuthorsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
