import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';

import { ProjectsService } from '../services/projects.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
