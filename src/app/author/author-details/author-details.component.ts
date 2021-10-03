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


  constructor(private router : Router, private activatedRoute: ActivatedRoute) {
    this.author = this.router.getCurrentNavigation()?.extras.state as IAuthor;
  }

  ngOnInit(): void {
  }




}
