import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';

//import { Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';

const routes: Routes = [
  { path: '', title: 'Home page', component: NotesListComponent},
  { path: 'new', title: 'add Note page', component: AddNoteComponent},
  { path: 'note/:id', title: 'Note detail page', component: NoteDetailComponent},
  { path: '**', title: 'Page not found',component: NotFoundComponent},
];

//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  //providers: [[provideRouter(routes)]],
})
export class AppRoutingModule { }
