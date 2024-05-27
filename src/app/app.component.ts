import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ValidationButtonComponent } from './validation-button/validation-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ValidationButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mBienvenue sur le site de Demba!';
}
