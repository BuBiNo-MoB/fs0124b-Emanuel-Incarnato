import { Component } from '@angular/core';
import { iList } from '../../models/list';
import { ListService } from '../../services/list.service';
import { UsersService } from './../../services/users.service';


@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent {
  activeTasks: iList[] = [];

  constructor(private listService: ListService, private userService: UsersService) { }

  ngOnInit(): void {
    this.activeTasks = this.listService.getCompleted();
  }

  getUserFullName(userId: number) {
    const user = this.userService.getById(userId);
    return user ? `${user.firstName} ${user.lastName}` : '';
  }

  toggleCompletion(id: number) {
    this.listService.completeMethod(id);
  }
}
