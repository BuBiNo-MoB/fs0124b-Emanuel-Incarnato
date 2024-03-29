import { ListService } from './../../services/list.service';
import { iUsers } from './../../models/users';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { iList } from '../../models/list';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  tasks: iList[] = [];

  constructor(private listService: ListService, private userService: UsersService) { }

  ngOnInit(): void {
    this.tasks = this.listService.getAll();
  }

  toggleCompletion(id: any) {
    this.listService.completeMethod(id);
  }

  getUserFullName(userId: number) {
    const user = this.userService.getById(userId);
    return user ? `${user.firstName} ${user.lastName}` : '';
  }
}
