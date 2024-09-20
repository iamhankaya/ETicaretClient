import { Component } from '@angular/core';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { BasketsComponent } from './components/baskets/baskets.component';

@Component({
  selector: 'app-ui',
  standalone: true,
  imports: [ProductsComponent,
    HomeComponent,
    BasketsComponent],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.scss'
})
export class UiComponent {

}
