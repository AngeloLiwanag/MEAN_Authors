import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  author: any;
  deleteAuthor: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getAuthorsFromService();
  }

  getAuthorsFromService(){
    this._httpService.getAuthors().subscribe(data =>{
      this.author = data.author;
      console.log(this.author)
    })
  }

  onButtonDelete(id: String): void{
    console.log(id)
    this._httpService.deleteAuthor(id).subscribe(data =>{
      this.deleteAuthor = id;
      this.ngOnInit();
    })
  }
}
