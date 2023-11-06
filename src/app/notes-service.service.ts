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
    return this.http.get(this.url, {headers: this.headers});
  }
  public getById(payload: {id: string;}){
    return this.http.get(this.url + '/' + payload, {headers: this.headers});
  }
  public add(payload: any){
    return this.http.post(this.url, payload, {headers: this.headers});
  }
  public remove(payload: { noteId: string; }){
    return this.http.delete(this.url + '?id=' + payload.noteId, {headers: this.headers});
  }
  public update(payload: { noteId: string; }){
    return this.http.put(this.url + '?id=' + payload.noteId, payload, {headers: this.headers});
  }
}
