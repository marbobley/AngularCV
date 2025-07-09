import { Routes } from '@angular/router';
import { About } from './Pages/about/about';
import { Home } from './Pages/home/home';
import { Experience } from './experience/experience';
import { Skill } from './Pages/skill/skill';
import { Playground } from './Pages/playground/playground';
import { TestBreakpointObserver } from './test-breakpoint-observer/test-breakpoint-observer';
import { LoginApi } from './Pages/login-api/login-api';
import { Admin } from './admin/admin';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'experience', component: Experience },
    { path: 'skill', component: Skill },
    { path: 'playground', component: Playground },
    { path: 'testBreakpoint', component: TestBreakpointObserver },
    { path: 'admin' , component: Admin},
    { path: 'login' , component: LoginApi}
];
