import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TeamService } from './Team.service';

import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule],
  providers: [TeamService],
  bootstrap: [AppComponent]
})

export class AppModule { }
