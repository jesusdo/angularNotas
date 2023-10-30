import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NOTES } from 'src/notes';


@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent {
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  note = NOTES.find((i) => i.id=== this.id);
  inde = NOTES.findIndex((i) => i.id === this.id);

  delete(){
    NOTES.splice(this.inde, 1);
    this.router.navigateByUrl('/');
  }
}
