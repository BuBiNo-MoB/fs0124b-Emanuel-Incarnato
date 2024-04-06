import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FilmComponent } from './film/film.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '',
    component: DashboardComponent
  },
  {
    path:'films',
    component: FilmComponent
  },
  {
    path:'users',
    component: UsersComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
