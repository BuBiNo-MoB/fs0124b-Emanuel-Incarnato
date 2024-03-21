import { Component } from '@angular/core';
import { iArticle } from '../../Models/article';
import { iJson } from '../../Models/cont-json';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrl: './inactive-post.component.scss'
})
export class InactivePostComponent {
  articleArr: iArticle[] = [];
  articleRandom: iArticle[] = [];

  ngOnInit() {

    fetch('../assets/db.json')
      .then(articles => articles.json())
      .then((articles: iJson) => {

        this.articleArr = articles.posts
        this.articleArr = this.articleArr.filter(p => !p.active)
      }
      )
  }
}
