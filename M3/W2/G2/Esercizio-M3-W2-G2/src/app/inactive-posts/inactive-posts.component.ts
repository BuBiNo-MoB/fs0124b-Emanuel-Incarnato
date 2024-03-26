import { Component } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent {
  active!: PostInterface[];

  constructor(private PostsService: PostsService) { }

  ngOnInit(): void {
    this.active = this.PostsService.getInactivePosts();
  }
}
