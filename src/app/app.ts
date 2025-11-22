import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Categories } from './categories/categories';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Homepage, Categories],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  protected readonly title = signal('KanuterOfTheYear');
}
