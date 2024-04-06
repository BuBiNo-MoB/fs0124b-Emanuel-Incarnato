import { Component, OnInit } from '@angular/core';
import { IUser } from '../../modules/i-user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: IUser[] = [];

  constructor(private userSvc: UserService) { }

  ngOnInit(): void {
    this.userSvc.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
