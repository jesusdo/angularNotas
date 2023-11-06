import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesServiceService } from '../notes-service.service';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  addNoteForm= new FormGroup({
      title: new FormControl('', Validators.required),
      text: new FormControl(''),
  });

  router = inject(Router);

  @Input() note: any;

  constructor(private noteService: NotesServiceService){
    this.clearNotes();
  }

  //create an empty note object
  private clearNotes = () =>{
    this.note = {
      NoteId: undefined,
      Title: '',
      Text: ''
    };
  };

  public addNote(){
    this.note.Title = this.addNoteForm.get('title')?.value;
    this.note.Text = this.addNoteForm.get('text')?.value;
    this.noteService.add(this.note).subscribe();
    this.addNoteForm.reset();
    this.clearNotes();
    this.router.navigateByUrl('/');
  }
}
