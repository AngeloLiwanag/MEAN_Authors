import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {
  newAuthor: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.newAuthor = { name: "" }
  }
  
  onSubmitAuthor(){
    console.log('Inside onSubmitAuthor components')
    this._httpService.addAuthor(this.newAuthor).subscribe(data =>{
      this.newAuthor = { name: "" }
      console.log(this.newAuthor)
    })
  }
}
