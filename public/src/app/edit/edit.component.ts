import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editAuthor:any;
  authorId:any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      console.log("ngOnInit", params['id']);
      this.authorId = params['id']
    })
    this.editAuthor = { name: ""}
  }
  onSubmitEdit(){
    this._httpService.editAuthor(this.authorId, this.editAuthor).subscribe(data=>{
      console.log(data)
      this.ngOnInit();
    })
  }

}
