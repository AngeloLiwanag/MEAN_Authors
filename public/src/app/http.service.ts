import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) { }

  getAuthors(){
    return this._http.get('/author')
  }
  addAuthor(newAuthor){
    console.log('Inside addAuthor(newAuthor) service')
    return this._http.post('/add/author', newAuthor)
  }
  deleteAuthor(deleteAuthor){
    console.log('service')
    return this._http.get('/delete/author', deleteAuthor)
  }
  editAuthor(authorId, editAuthor){
    return this._http.post(`/edit/author/${authorId}`, editAuthor)
  }
}
