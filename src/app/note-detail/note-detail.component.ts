import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NotesServiceService } from '../notes-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css'],
  providers: [NotesServiceService],
})
export class NoteDetailComponent {
  public note: any;
  constructor(private noteService: NotesServiceService){
    this.note = this.getDefaultNote();
    this.note.noteId = this.activeRoute.snapshot.paramMap.get('id');
    noteService.getById(this.note.noteId).subscribe((data: any) => {this.note = data});
  }
  private getDefaultNote(){
    return{
      noteId: '',
      title: '',
      text: ''
    }
  }

  //validadores en formulario
  updateNote= new FormGroup({
    title: new FormControl({value: '', disabled: true}, Validators.required),
    text: new FormControl({value: '', disabled: true}),
  });
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  isFoo: boolean =true;

  //activa o desactiva los inputs titulo y texto
  public edit(){
    this.isFoo? this.updateNote.get('title')?.enable() : this.updateNote.get('title')?.disable();
    this.isFoo? this.updateNote.get('text')?.enable() : this.updateNote.get('text')?.disable();
    this.isFoo = !this.isFoo;
  }

  public update(){
    this.note.title = this.updateNote.get('title')?.value;
    this.note.text = this.updateNote.get('text')?.value;
    this.noteService.update(this.note).subscribe();
    alert("Actualizado con exito");
    this.updateNote.reset();
  }

  public delete(){
    this.noteService.remove(this.note).subscribe();
    this.router.navigateByUrl('/');
  }
}
