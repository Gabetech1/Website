import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Frontend/home/home.component';
import { AboutComponent } from './Frontend/about/about.component';
import { TutorialsComponent } from './Frontend/tutorials/tutorials.component';
import { QuizComponent } from './Frontend/quiz/quiz.component';
import { BlogComponent } from './Frontend/blog/blog.component';
import { GamesComponent } from './Frontend/games/games.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'tutorials', component: TutorialsComponent},
  {path: 'games', component: GamesComponent},
  {path: 'blog', component: BlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

