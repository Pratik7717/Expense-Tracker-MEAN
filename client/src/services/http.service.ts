import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http:HttpClient) { }

  get(){
    return this.http.get('http://localhost:5000/');
  }

  post(body:any){
    return this.http.post('http://localhost:5000/',body);
  }

}
