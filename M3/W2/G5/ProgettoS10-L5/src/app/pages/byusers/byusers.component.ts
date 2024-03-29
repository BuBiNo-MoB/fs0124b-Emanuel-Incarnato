import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { iList } from '../../models/list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-byusers',
  templateUrl: './byusers.component.html',
  styleUrls: ['./byusers.component.scss']
})

export class ByusersComponent implements OnInit {
  userTasks: { userId: number, tasks: iList[] }[] = [];
  filteredUserTasks: { userId: number, tasks: iList[] }[] = [];
  searchTerm: string = '';

  constructor(private listService: ListService, private userService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.populateUserTasks();
    ;
  }

  async populateUserTasks(): Promise<void> {
    await this.listService.fillmethod();

    const tasksByUser: { [userId: number]: iList[] } = {};

    this.listService.list.forEach(task => {
      if (!tasksByUser[task.userId]) {
        tasksByUser[task.userId] = [];
      }
      tasksByUser[task.userId].push(task);
    });

    this.userTasks = Object.keys(tasksByUser).map(userId => ({
      userId: +userId,
      tasks: tasksByUser[+userId]
    }));
  }

  toggleCompletion(itemId: number): void {
    this.listService.completeMethod(itemId);
  }
}
