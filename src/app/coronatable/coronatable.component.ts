import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../corona.service';
import { Itable } from './table'



@Component({
  selector: 'app-coronatable',
  templateUrl: './coronatable.component.html',
  styleUrls: ['./coronatable.component.css']
})
export class CoronatableComponent implements OnInit{
  public table : Itable[] = [];
  
 
  constructor(private _coronaService:CoronaService) { }

  ngOnInit():void {
    this._coronaService.getTables()
    .subscribe((data)=>{
      this.table=data;
    });
  }

}
