import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';

import { SignupComponent } from './features/signup/signup.component';
import { LoginComponent } from './features/login/login.component';

import { ContactComponent } from './features/contact/contact.component';
import { AboutComponent } from './features/about/about.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, },
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},

    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},
    {path: '**', component: NotFoundComponent}

];
