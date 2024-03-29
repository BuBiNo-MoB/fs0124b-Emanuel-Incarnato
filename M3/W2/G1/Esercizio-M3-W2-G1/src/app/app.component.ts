import { Component } from '@angular/core';
import { iArticle } from './Models/article';
import { iJson } from './Models/cont-json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Esercizio-M3-W1-G3';

  articleArr: iArticle[] = [];
  articleRandom: iArticle[] = [];
  article: any;
  posts: any;

  ngOnInit() {

    fetch('../assets/db.json')
      .then(articles => articles.json())
      .then((articles: iJson) => {

        this.articleArr = articles.posts
        this.getRandomposts(3)
      }
      )
  }

  getRandomposts(n: number) {
    for (let i = 0; i < n; i++) {
      let random = Math.floor(Math.random() * this.articleArr.length)
      this.articleRandom.push(this.articleArr[random])
    }
  }
}
