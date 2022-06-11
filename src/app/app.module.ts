import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostComponent } from './components/post/post.component';
import { AllPostComponent } from './components/all-post/all-post.component';
import { TrendsComponent } from './components/trends/trends.component';
import { SuggestionFollowComponent } from './components/suggestion-follow/suggestion-follow.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    PostComponent,
    AllPostComponent,
    TrendsComponent,
    SuggestionFollowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
