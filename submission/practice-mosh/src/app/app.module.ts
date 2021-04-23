import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './service/post.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubfollowersComponent } from './githubfollowers/githubfollowers.component';
import { GithubfollowersprofileComponent } from './githubfollowersprofile/githubfollowersprofile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ChildParentComponent } from './child-parent/child-parent.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    SignUpFormComponent,
    FormArrayComponent,
    PostsComponent,
    NavbarComponent,
    HomeComponent,
    GithubfollowersComponent,
    GithubfollowersprofileComponent,
    NotfoundComponent,
    ChildParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
