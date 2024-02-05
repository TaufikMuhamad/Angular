import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';

export const routes: Routes = [{
    path : "Login",
    component: LoginComponent
}
{
    path : "signup",
    component: SignupComponent
}
{
    path : "customer",
    component:CustomerComponent;
}
{
    path : "admin",
    component: AdminComponent
}
];
