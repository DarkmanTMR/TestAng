import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IBook} from "../../models/ibook";


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private _url = 'http://localhost:8080/books'

  constructor(private httpClient: HttpClient) {

  }

  getAllBooks(): Observable<IBook[]>{
    return this.httpClient.get<IBook[]>(this._url);
  }
}
