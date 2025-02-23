import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./components/card/card.component";
import { TimerComponent } from "./components/countdown/countdown.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, TimerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Singu';
}
