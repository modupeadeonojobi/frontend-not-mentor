import { PostService } from './../service/post.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  // A LOT HAS CHANGE IN ANGULAR 10 FROM MOSH TUTORIAL.
  // SO, INSTEAD OF HTTP, WE USE HTTPCLIENT AND IT IS MUCH EASIER
  // TO USE COMPARE TO THE HTTP WHEN YOU HAVE TO ADD .JSON TO RESPONSE
  // INORDER TO GET THE DATA DISPLAY ON THE BROWSER
  constructor(private service: PostService) {
  }

  ngOnInit(): void {
    this.service.get_('posts')
      .subscribe((posts: any) => this.posts = posts);
    this.posts = [];
  }

  createPost(input: HTMLInputElement): any {
    const post = { id: '', title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';
    this.service.post_('posts', post)
      .subscribe((response: any) => {
        post.id = response.id;
      }, (error: Response) => {
        this.posts.splice(0, 1);

        if (error.status === 400) {
          // this.form.setError(error.json());
          alert('This post has already been deleted');
        } else {
          alert('Unexpected toke');
          console.log(error);
        }
      });
  }

  deletePost(post: any): any {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete_('posts', post.id)
      .subscribe((response: any) => {
      }, (error: Response) => {
        this.posts.splice(index, 0, post);

        if (error.status === 404) {
          alert('This post has already been deleted');
        } else {
          alert('Unexpected error');
          console.log(error);
        }
      });
  }

}
 