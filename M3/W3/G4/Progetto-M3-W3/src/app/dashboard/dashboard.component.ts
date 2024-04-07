import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FilmService } from '../service/film.service';
import { IFilm } from '../modules/i-film';
import { IUser } from '../modules/i-user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: IUser | undefined;
  films: IFilm[] = [];

  constructor(private authSvc: AuthService, private filmService: FilmService) {}

  ngOnInit(): void {
    this.authSvc.user$.subscribe(user => {
      this.user = user || undefined;
    });
    this.getFourFilms();
  }

  getFourFilms(): void {
    this.filmService.getFourFilms()
      .subscribe(films => this.films = films);
  }
}
