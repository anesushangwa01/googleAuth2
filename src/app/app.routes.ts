import { Routes } from '@angular/router';
import { GoogleAuthComponent } from './google-auth/google-auth.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {path: 'googleauth', component: GoogleAuthComponent},
    {path: 'profile', component: ProfileComponent},
    {path: '', redirectTo: '/googleauth', pathMatch: 'full'}
];
