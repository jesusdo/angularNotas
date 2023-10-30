import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NOTES } from 'src/notes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent {
  //notes = NOTES;
  show(title: string){
    alert(title);//hola
  };

  @Input() notes: Array<any> | undefined;
  @Output() recordDeleted= new EventEmitter<any>();
  @Output() newClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();

  public delete(data: any){
    this.recordDeleted.emit(data);
  }
  public edit(data: any){
    this.editClicked.emit(Object.assign({}, data));
  }
  public new(){
    this.newClicked.emit();
  }
  ngOnInit(){

  }

}
