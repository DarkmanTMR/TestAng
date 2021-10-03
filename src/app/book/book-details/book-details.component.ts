import { Component, OnInit } from '@angular/core';
import {IBook} from "../../models/ibook";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: IBook;

  constructor(private router : Router, private activatedRoute: ActivatedRoute) {
    this.book = this.router.getCurrentNavigation()?.extras.state as IBook;
  }

  ngOnInit(): void {
  }

}
