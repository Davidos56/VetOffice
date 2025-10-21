import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SpecializationspageComponent } from './pages/specializationspage/specializationspage.component';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
    },
    {
        path: 'news',
        component: SpecializationspageComponent,
    },
];
