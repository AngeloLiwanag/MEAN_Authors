import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Favorite authors';
  author: any;
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getAuthorsFromService();
  }

  getAuthorsFromService(){
    this._httpService.getAuthors().subscribe(data =>{
      this.author = data.author;
      console.log(this.author)
    })
  }
}
