import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFilm } from '../modules/i-film';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private apiUrl = 'http://localhost:3000/films';
  private userUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getFilms(): Observable<IFilm[]> {
    return this.http.get<IFilm[]>(this.apiUrl);
  }

  getFourFilms(): Observable<IFilm[]> {
    return this.http.get<IFilm[]>(`${this.apiUrl}?_limit=4`);
  }

  getFilmById(id: number): Observable<IFilm> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<IFilm>(url);
  }
}
