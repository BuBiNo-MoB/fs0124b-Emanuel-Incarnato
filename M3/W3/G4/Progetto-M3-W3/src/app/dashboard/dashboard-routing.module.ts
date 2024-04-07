import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FilmComponent } from './film/film.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'films',
    component: FilmComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
