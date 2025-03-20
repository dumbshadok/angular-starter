import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';

import { SignupComponent } from './features/signup/signup.component';
import { LoginComponent } from './features/login/login.component';

import { ContactComponent } from './features/contact/contact.component';
import { AboutComponent } from './features/about/about.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { MailingComponent } from './features/contact/mailing/mailing.component';
import { MappingComponent } from './features/contact/mapping/mapping.component';
import { WebsiteComponent } from './features/contact/website/website.component';
import { ExperienceComponent } from './features/about/experience/experience.component';
import { SkillComponent } from './features/about/skill/skill.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },

    {
        path: 'contact', component: ContactComponent,
        children: [
            { path: 'mailing', component: MailingComponent },
            { path: 'mapping', component: MappingComponent },
            { path: 'website', component: WebsiteComponent }
        ]
    },
    {
        path: 'about', component: AboutComponent,
        children: [
            { path: 'experience', component: ExperienceComponent },
            { path: 'skill', component: SkillComponent }
        ]
    },
    { path: '**', component: NotFoundComponent },

];
