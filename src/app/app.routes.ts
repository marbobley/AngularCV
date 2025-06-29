import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Experience } from './experience/experience';
import { Skill } from './skill/skill';
import { Playground } from './playground/playground';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'experience', component: Experience },
    { path: 'skill', component: Skill },
    { path: 'playground', component: Playground }
];
