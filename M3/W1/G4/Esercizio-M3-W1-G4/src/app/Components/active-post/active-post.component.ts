import { Component } from '@angular/core';
import { iArticle } from '../../Models/article';
import { PostsService } from '../../posts.service';
import { iJson } from '../../Models/cont-json';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrl: './active-post.component.scss'
})
export class ActivePostComponent {
  articleArr: iArticle[] = [];

  constructor(private articlesSvc:PostsService){}


  ngOnInit() {

    this.articlesSvc.getActivePosts().then(articles => {

      this.articleArr = articles;

    })
  }
}
