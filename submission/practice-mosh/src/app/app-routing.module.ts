import { NavbarComponent } from './navbar/navbar.component';
import { GithubfollowersprofileComponent } from './githubfollowersprofile/githubfollowersprofile.component';
import { GithubfollowersComponent } from './githubfollowers/githubfollowers.component';
import { PostsComponent } from './posts/posts.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'contact', component: ContactFormComponent },
      { path: 'sign', component: SignUpFormComponent },
      { path: 'array', component: FormArrayComponent },

      { path: 'home', component: HomeComponent },

      { path: 'followers/:id/:username', component: GithubfollowersprofileComponent },
      { path: 'followers', component: GithubfollowersComponent },
      { path: 'posts', component: PostsComponent },
      { path: '**', component: NotfoundComponent },
    ],


  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
