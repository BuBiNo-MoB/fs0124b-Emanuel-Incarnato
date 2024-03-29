import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { LeftComponent } from './pages/left/left.component';
import { ByusersComponent } from './pages/byusers/byusers.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'completed',
    component: CompletedComponent
  },
  {
    path: 'left',
    component: LeftComponent
  },
  {
    path:'byusers',
    component: ByusersComponent
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
