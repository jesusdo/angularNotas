import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      not-found works!
    </p>
  `,
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

}
