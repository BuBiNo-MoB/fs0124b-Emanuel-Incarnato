import { iJson } from './Models/cont-json';
import { Injectable } from '@angular/core';
import { iArticle } from './Models/article';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  getAllPosts():Promise<iArticle[]>{

    return fetch ('../assets/db.json')
    .then(article => article.json())
    .then((article:iArticle[]) => article)
  }

  getActivePosts():Promise<iArticle[]>{
    return this.getAllPosts()
    .then(article => article.filter(p => p.active))
  }

  getInactivePosts():Promise<iArticle[]>{
    return this.getAllPosts()
    .then(article => article.filter(p => !p.active))
  }
}
