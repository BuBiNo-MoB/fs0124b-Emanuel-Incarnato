import { Component } from '@angular/core';
import { iArticle } from '../../Models/article';
import { iJson } from '../../Models/cont-json';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrl: './inactive-post.component.scss'
})
export class InactivePostComponent {
  articleArr: iArticle[] = [];

  constructor(private articlesSvc:PostsService){}


  ngOnInit() {

    this.articlesSvc.getInactivePosts().then(articles => {

      this.articleArr = articles;

    })
  }
}
