import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesServiceService } from './notes-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularNotes';
  name = '';
  showName(){
    alert(this.name);
  };
  name2 = new FormControl('Juan');

  showName2(){
    alert(this.name2.value);
  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  login(){
    alert( this.loginForm.value.username + ' | '+this.loginForm.value.password);
  }

  router = inject(Router);
  navigate() {
    this.router.navigateByUrl('/contacts');
  }

  /*
  
  //Conecting front with api
  readonly APIUrl="https://localhost:7243/api/Note";

  constructor(private http:HttpClient) {}

  notes: any=[];

  refreshNotes(){
    this.http.get(this.APIUrl).subscribe((data: any)=>{
      this.notes=data;
    })
  }

  ngOnInit(){
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', 'https://localhost:7243');

    this.http.get<any>(this.APIUrl, {headers:headers}).subscribe(data => {console.log(data);
    });
    //this.refreshNotes();

    //console.log(this.notes);
  };
*/


  public notes: Array<any> = [];
  public currentNote: any;
  constructor(private noteService: NotesServiceService){
    noteService.get().subscribe((data: any) => {this.notes = data});
    noteService.get().subscribe((data: any) => console.log(data));
    this.currentNote = this.getDefaultNote();
    console.log(this.notes);
    console.log("hola")
  }
  private getDefaultNote(){
    return{
      noteId: undefined,
      title: '',
      text: ''
    }
  }

  //public createUpdateNote = function (note: any){
    //let noteWithId = _.find(this.notes, (el => el.id === note.id));
  //}

  ngOnInit(){

  }
}
