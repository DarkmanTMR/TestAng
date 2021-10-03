import { Component, OnInit } from '@angular/core';
import {IBook} from "../../models/ibook";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-books-authors',
  templateUrl: './books-authors.component.html',
  styleUrls: ['./books-authors.component.scss']
})
export class BooksAuthorsComponent implements OnInit {

  book: IBook;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.book = this.router.getCurrentNavigation()?.extras.state as IBook;
  }

  ngOnInit(): void {
  }

}
