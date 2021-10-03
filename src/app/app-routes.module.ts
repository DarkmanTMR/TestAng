import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: 'authors', loadChildren: () => import('./author/author.module').then(m => m.AuthorModule)},
  {path: 'books', loadChildren: () => import('./book/book.module').then(m => m.BookModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutesModule { }
