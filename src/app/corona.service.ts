import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoronaService {
private _url:string="https://coronavirus-19-api.herokuapp.com/countries";
  constructor(private http:HttpClient) { }
getTables():Observable<any>{
  return this.http.get(this._url);
}
  
}
