import { iJson } from '../../Models/cont-json';
import { iArticle } from './../../Models/article';
import { Component } from '@angular/core';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrl: './active-post.component.scss'
})
export class ActivePostComponent {
  articleArr : iArticle[] = [];

  ngOnInit(){

    fetch('../../../assets/db.json')
      .then(articles => articles.json())
      .then((articles:iJson) =>{



      })
  }
}
