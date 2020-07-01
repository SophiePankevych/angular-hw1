import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {logger} from 'codelyzer/util/logger';
import {User} from '../../models/User';
import {Post} from '../../models/Post';
import {Comment} from '../../models/Comment';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello</h1>
    <app-user *ngFor="let u of users" [user]="u"></app-user>
    <app-post *ngFor="let p of posts" [post]="p"></app-post>
    <app-comment *ngFor="let c of comments" [comment]="c"></app-comment>
  `,
  styles: [`h1 {
    background: lightyellow
  }`,
      `div {
      margin-bottom: 10px;
      border: 1px solid red
    }`]
})
export class AppComponent {
  users: User[];
  posts: Post[];
  comments: Comment[];
  constructor(private httpClient: HttpClient) {
    this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => this.users = data)
    ;
    this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => this.posts = data.slice(0, 10))
    ;
    this.httpClient.get<Comment[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe(data => this.comments = data.slice(0, 10))
    ;
  }
}
