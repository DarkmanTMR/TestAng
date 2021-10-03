import { Component, OnInit } from '@angular/core';
import {IAuthor} from "../../models/iauthor";
import {AuthorService} from "../author.service/author.service";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  authors: IAuthor[];

  constructor(private authorService : AuthorService) {
    this.authorService.getAllAuthors().subscribe(value => this.authors = value)
  }

  ngOnInit(): void {
  }

}
