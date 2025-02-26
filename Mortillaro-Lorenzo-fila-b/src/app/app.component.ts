import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { FourthComponentComponent } from './fourth-component/fourth-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SecondComponentComponent, ThirdComponentComponent, FourthComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mortillaro-Lorenzo-fila-b';
}
