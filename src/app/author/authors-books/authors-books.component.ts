import {Component,OnInit} from '@angular/core';
import {IAuthor} from "../../models/iauthor";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-authors-books',
  templateUrl: './authors-books.component.html',
  styleUrls: ['./authors-books.component.scss']
})
export class AuthorsBooksComponent implements OnInit {


  author: IAuthor;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.author = this.router.getCurrentNavigation()?.extras.state as IAuthor;
  }

  ngOnInit(): void {
  }

}
