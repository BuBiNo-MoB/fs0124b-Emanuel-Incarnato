import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FiatComponent } from './pages/fiat/fiat.component';
import { AudiComponent } from './pages/audi/audi.component';
import { FordComponent } from './pages/ford/ford.component';
import { Page404Component } from './pages/page404/page404.component';
import { CarDetailsComponent } from './pages/car-details/car-details.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'fiat',
    component:FiatComponent
  },
  {
    path:'audi',
    component:AudiComponent
  },
  {
    path:'ford',
    component:FordComponent
  },
  {
    path:'dettagli/:id',
    component:CarDetailsComponent
  },
  {
    path:'**',
    component:Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
