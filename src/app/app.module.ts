import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { TaskComponent } from './task/task.component';
import { GamecontainerComponent } from './gamecontainer/gamecontainer.component';
import { ModelcontainerComponent } from './modelcontainer/modelcontainer.component';
import { ListItemComponent } from './gamecontainer/components/list-item/list-item.component';
import { NewmodelComponent } from './modelcontainer/components/newmodel/newmodel.component';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    KnowledgeBaseComponent,
    TaskComponent,
    GamecontainerComponent,
    ModelcontainerComponent,
    ListItemComponent,
    NewmodelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
