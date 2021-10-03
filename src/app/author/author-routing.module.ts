import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthorsComponent} from "./authors/authors.component";
import {AuthorDetailsComponent} from "./author-details/author-details.component";
import {AuthorsBooksComponent} from "./authors-books/authors-books.component";

const routes: Routes = [
  {path: '', component: AuthorsComponent},
  {path: 'authors', component: AuthorsComponent},
  {path: ':id', component: AuthorDetailsComponent},
  {path: ':id/books', component: AuthorsBooksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
