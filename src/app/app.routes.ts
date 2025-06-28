import { Routes } from '@angular/router';
import { About } from './about/about';

export const routes: Routes = [
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
    {path: 'about', component:About,  }
];
