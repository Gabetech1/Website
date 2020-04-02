import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Frontend/home/home.component';
import { AboutComponent } from './Frontend/about/about.component';
import { TutorialsComponent } from './Frontend/tutorials/tutorials.component';
import { NavbarComponent } from './Frontend/navbar/navbar.component';
import { FooterComponent } from './Frontend/footer/footer.component';
import { QuizComponent } from './Frontend/quiz/quiz.component';
import { GamesComponent } from './Frontend/games/games.component';
import { BlogComponent } from './Frontend/blog/blog.component';
import { ContactComponent } from './Frontend/contact/contact.component';
import { MapComponent } from './Frontend/map/map.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TutorialsComponent,
    NavbarComponent,
    FooterComponent,
    QuizComponent,
    GamesComponent,
    BlogComponent,
    ContactComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
