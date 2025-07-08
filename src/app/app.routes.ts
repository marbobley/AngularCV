import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Experience } from './experience/experience';
import { Skill } from './skill/skill';
import { Playground } from './playground/playground';
import { TestBreakpointObserver } from './test-breakpoint-observer/test-breakpoint-observer';
import { CategorySkillList } from './category-skill-list/category-skill-list';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'experience', component: Experience },
    { path: 'skill', component: Skill },
    { path: 'playground', component: Playground },
    { path: 'testBreakpoint', component: TestBreakpointObserver },
    { path: 'admin' , component: CategorySkillList}
];
