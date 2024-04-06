// film.component.ts

import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../service/film.service';
import { IFilm } from '../../modules/i-film';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  films: IFilm[] = [];

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(): void {
    this.filmService.getFilms()
      .subscribe(films => this.films = films);
  }
}
