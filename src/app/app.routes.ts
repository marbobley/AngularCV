import { Routes } from '@angular/router';
import { About } from './Pages/about/about';
import { Home } from './Pages/home/home';
import { Experience } from './Pages/experience/experience';
import { Skill } from './Pages/skill/skill';
import { Playground } from './Pages/playground/playground';
import { TestBreakpointObserver } from './Pages/test-breakpoint-observer/test-breakpoint-observer';
import { LoginApi } from './Pages/login-api/login-api';
import { Admin } from './Pages/admin/admin';
import { AdminGuard } from './Guards/admin-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'experience', component: Experience },
    { path: 'skill', component: Skill },
    { path: 'playground', component: Playground },
    { path: 'testBreakpoint', component: TestBreakpointObserver },
    { path: 'admin' , component: Admin , canActivate: [AdminGuard]},
    { path: 'login' , component: LoginApi}
];
