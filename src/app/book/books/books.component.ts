import { Component, OnInit } from '@angular/core';
import {IBook} from "../../models/ibook";
import {BookService} from "../book.service/book.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: IBook[];

  constructor(private bookService : BookService) {
    this.bookService.getAllBooks().subscribe(value => this.books = value)
}

  ngOnInit(): void {
  }

}
