import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/view/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/index.html',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: '/index.html',
    pathMatch: 'full'
  },
  {
    path: 'index.html',
    component: HomeComponent
  }
];
