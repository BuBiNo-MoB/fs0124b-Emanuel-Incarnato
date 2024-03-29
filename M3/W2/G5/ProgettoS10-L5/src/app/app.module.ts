import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './mainComponent/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { LeftComponent } from './pages/left/left.component';
import { ByusersComponent } from './pages/byusers/byusers.component';
import { Page404Component } from './pages/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    CompletedComponent,
    LeftComponent,
    ByusersComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
