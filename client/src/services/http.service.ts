import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http:HttpClient) { }

  get(){
    return this.http.get('transaction',{ responseType: 'json' });
  }

  post(body:any){
    return this.http.post('transaction',body,{ responseType: 'json' });
  }

  delete(id:string){
    return this.http.delete(`transaction/${id}`);
  }

}
