import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ActivePostComponent } from './Components/active-post/active-post.component';
import { InactivePostComponent } from './Components/inactive-post/inactive-post.component';
import { Page404Component } from './Components/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'active-posts',
    component: ActivePostComponent
  },
  {
    path: 'inactive-posts',
    component: InactivePostComponent
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
