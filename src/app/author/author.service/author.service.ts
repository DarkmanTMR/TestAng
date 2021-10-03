import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAuthor} from "../../models/iauthor";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
private _url = 'http://localhost:8080/authors'

  constructor(private httpClient: HttpClient) {

  }

  getAllAuthors(): Observable<IAuthor[]>{
      return this.httpClient.get<IAuthor[]>(this._url);
  }
}
