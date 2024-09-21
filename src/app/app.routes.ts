import { Routes } from '@angular/router';
import { UiComponent } from './ui/ui.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './admin/components/customers/customer.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { OrderComponent } from './admin/components/orders/order.component';
import { ProductComponent } from './admin/components/products/product.component';
import { HomeComponent } from './ui/components/home/home.component';
import { BasketsComponent } from './ui/components/baskets/baskets.component';
import { ProductsComponent } from './ui/components/products/products.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"basket",component:BasketsComponent},
    {path:"products",component:ProductsComponent},
    {path:"admin",component:AdminComponent,children:[
        {path:"customers",component:CustomerComponent},
        {path:"",component:DashboardComponent},
        {path:"orders",component:OrderComponent},
        {path:"products",component:ProductComponent}
    ]}
];
