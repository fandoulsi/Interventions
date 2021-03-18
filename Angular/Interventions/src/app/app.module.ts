import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule } from '@angular/router';
import { DeclarerUnProblemeComponent } from './declarer-un-probleme/declarer-un-probleme.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    DeclarerUnProblemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
