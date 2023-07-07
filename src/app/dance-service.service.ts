import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dance } from './Models/Dance';

@Injectable({
  providedIn: 'root'
})
export class DanceServiceService {

  constructor(private http: HttpClient) { }
  addDance(dance:Dance)
  {
    return this.http.post("http://localhost:8083/addDance", dance);
  }
  getDances()
  {
    return this.http.get("http://localhost:8083/getDances");
  }
  deleteDances(id:number)
  {
    return this.http.delete("http://localhost:8083/deleteDance",);
  }
}
