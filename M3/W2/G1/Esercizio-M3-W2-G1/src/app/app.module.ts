import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivePostComponent } from './Components/active-post/active-post.component';
import { InactivePostComponent } from './Components/inactive-post/inactive-post.component';
import { PostDetailComponent } from './Components/post-detail/post-detail.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { Page404Component } from './Components/page404/page404.component';
import { SinglePostComponent } from './Components/single-post/single-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivePostComponent,
    InactivePostComponent,
    PostDetailComponent,
    NavbarComponent,
    HomeComponent,
    Page404Component,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
