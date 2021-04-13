import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http:HttpClient) { }

  get(){
    return this.http.get('http://localhost:8081/transaction',{ responseType: 'json' });
  }

  post(body:any){
    return this.http.post('http://localhost:8081/transaction',body,{ responseType: 'json' });
  }

  delete(id:string){
    return this.http.delete(`http://localhost:8081/transaction/${id}`);
  }

}
