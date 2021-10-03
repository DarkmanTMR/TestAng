import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IAuthor} from "../../models/iauthor";
import {IBook} from "../../models/ibook";

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.scss']
})
export class AuthorDetailsComponent implements OnInit {

  author: IAuthor;
  book: IBook;

  constructor(private router : Router, private activatedRoute: ActivatedRoute) {
    this.author = this.router.getCurrentNavigation()?.extras.state as IAuthor;
     }

  ngOnInit(): void {
  }

  authorsBooks() {
    this.router.navigate(['authors/:id/books', this.author.books], {state: this.author})
  }


}
