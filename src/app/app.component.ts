import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LayoutComponent } from "./admin/layout/layout.component";
import { UiComponent } from './ui/ui.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdminComponent,UiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ETicaretClient';
}
