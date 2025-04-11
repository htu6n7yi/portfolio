import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { Apresentacao2Component } from './components/apresentacao2/apresentacao2.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ApresentacaoComponent, Apresentacao2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
