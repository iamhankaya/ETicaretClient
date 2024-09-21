import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { ProductComponent } from './components/products/product.component';
import { OrderComponent } from './components/orders/order.component';
import { CustomerComponent } from './components/customers/customer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [LayoutComponent,
    ProductComponent,
    OrderComponent,
    CustomerComponent,
    DashboardComponent,
    RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
