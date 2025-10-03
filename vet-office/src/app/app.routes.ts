import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SpecializationspageComponent } from './pages/specializationspage/specializationspage.component';
import { TeampageComponent } from './pages/teampage/teampage.component';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
    },
        {
        path: 'specjalizacje',
        component: SpecializationspageComponent,
    },
    {
        path: 'team',
        component: TeampageComponent,
    },
];
