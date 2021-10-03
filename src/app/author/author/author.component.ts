import {Component, Input, OnInit} from '@angular/core';
import {IAuthor} from "../../models/iauthor";
import {ActivatedRoute, Router} from "@angular/router";
import {IBook} from "../../models/ibook";


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  @Input()
  author: IAuthor;
  book: IBook[];

  constructor(private router : Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  authorDetails(){
    this.router.navigate(['authors',this.author.id],{state:this.author})
    console.log(this.author)
  }



}
