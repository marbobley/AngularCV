import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './Pages/ComponentPages/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'AngularCV';
}
