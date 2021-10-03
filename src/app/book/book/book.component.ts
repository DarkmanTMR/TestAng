import {Component, Input, OnInit} from '@angular/core';
import {IBook} from "../../models/ibook";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input()
  book: IBook;

  constructor(private router : Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  bookDetails(){
    this.router.navigate(['books', this.book.id],{state:this.book})
    console.log(this.book)
  }
}
