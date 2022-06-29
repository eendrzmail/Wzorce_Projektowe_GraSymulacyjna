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
import { MatButtonModule } from '@angular/material/button';

import { FormsModule } from '@angular/forms';
import { EnumPipe } from './pipes/enum.pipe';
import { BoolPipe } from './pipes/bool.pipe';

import { GameModelActionsComponent } from './modelcontainer/components/actions/game-model-actions/game-model-actions.component';
import { GameModelStatsComponent } from './modelcontainer/components/stats/game-model-stats/game-model-stats.component';
import { ModelModifiersComponent } from './modelcontainer/components/model-modifiers/model-modifiers.component';
import { RenderModelActionsComponent } from './modelcontainer/components/actions/render-model-actions/render-model-actions.component';
import { ArchvizModelActionsComponent } from './modelcontainer/components/actions/archviz-model-actions/archviz-model-actions.component';
import { RenderModelStatsComponent } from './modelcontainer/components/stats/render-model-stats/render-model-stats.component';
import { ArchvizModelStatsComponent } from './modelcontainer/components/stats/archviz-model-stats/archviz-model-stats.component';
import { PrintModelStatsComponent } from './modelcontainer/components/stats/print-model-stats/print-model-stats.component';
import { PrintModelActionsComponent } from './modelcontainer/components/actions/print-model-actions/print-model-actions.component';




@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    KnowledgeBaseComponent,
    TaskComponent,
    GamecontainerComponent,
    ModelcontainerComponent,
    ListItemComponent,
    NewmodelComponent,
    EnumPipe,
    GameModelStatsComponent,
    BoolPipe,
    GameModelActionsComponent,
    ModelModifiersComponent,
    RenderModelActionsComponent,
    ArchvizModelActionsComponent,
    RenderModelStatsComponent,
    ArchvizModelStatsComponent,
    PrintModelStatsComponent,
    PrintModelActionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
