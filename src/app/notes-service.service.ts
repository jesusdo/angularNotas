import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NotesServiceService {
  private headers: HttpHeaders;
  private url: string = 'https://localhost:7243/api/Note';
  constructor(private http: HttpClient) {
      this.headers = new HttpHeaders({'Content-Type': 'application/json'})
      .set('Access-Control-Allow-Origin', 'https://localhost:7243');
   }
  public get(){
    console.log( this.http.get(this.url, {headers: this.headers}));
    return this.http.get(this.url, {headers: this.headers});
  }
  public add(payload: any){
    return this.http.post(this.url, payload, {headers: this.headers});
  }
  public remove(payload: { id: string; }){
    return this.http.delete(this.url + '/' + payload.id, {headers: this.headers});
  }
  public update(payload: { id: string; }){
    return this.http.put(this.url + '/' + payload.id, payload, {headers: this.headers});
  }
}
