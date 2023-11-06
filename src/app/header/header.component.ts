import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: `./header.component.html`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'My Notes';
}
