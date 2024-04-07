import { Component, OnInit } from '@angular/core';
import { IUser } from '../../modules/i-user';
import { AuthService } from '../../auth/auth.service';
import { IFilm } from '../../modules/i-film';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: IUser | null = null;
  favoriteFilms: IFilm[] = [];

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });
  }
}
