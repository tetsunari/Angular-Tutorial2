import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  // declarations: [
  // ],
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  // bootstrap: [AppComponent]
})
export class AppModule { }
