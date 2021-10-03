import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksComponent} from "./books/books.component";
import {BookDetailsComponent} from "./book-details/book-details.component";

const routes: Routes = [
  {path: '', component: BooksComponent},
  {path: 'books', component: BooksComponent},
  {path: ':id', component: BookDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
