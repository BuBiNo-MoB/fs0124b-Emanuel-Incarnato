import { Component } from '@angular/core';
import { iArticle } from './Models/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Esercizio-M3-W1-G3';

  articleArr:iArticle[] = [];

  ngOnInit(){

    fetch('../assets/db.json')
    .then(articles => articles.json())
    .then ((articles:iArticle[]) => this.articleArr = articles)
  }
}
