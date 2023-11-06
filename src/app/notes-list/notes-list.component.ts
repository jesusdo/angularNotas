import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotesServiceService } from '../notes-service.service';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  providers: [NotesServiceService],
})
export class NotesListComponent {
  @Input() notes: Array<any> | undefined;

  constructor(private noteService: NotesServiceService){
    noteService.get().subscribe((data: any) => {this.notes = data});
  }

}
