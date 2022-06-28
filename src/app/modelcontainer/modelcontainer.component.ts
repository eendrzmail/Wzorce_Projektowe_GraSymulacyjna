import { GameModel } from './../../models/3DModel/final/GameModel';
import { ModelTypes } from './../../models/Enums/ModelDecorators';
import { ModelService } from './../../services/model.service';
import { AbstractModel } from 'src/models/3DModel/Model.abstract';
import { Observable } from 'rxjs';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Model } from 'src/models/3DModel/SimpleModel';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-modelcontainer',
  templateUrl: './modelcontainer.component.html',
  styleUrls: ['./modelcontainer.component.scss']
})
export class ModelcontainerComponent implements OnInit {

  constructor(
    private modelsService: ModelService,
  ) { }

  @Input() model!: Model | undefined;
  @ViewChild(MatSelect) moveselect: any;

  types = ModelTypes;

  ngOnInit(): void {
  }

  composites$ = this.modelsService.getCompositesObservable()

  moveModel(model: AbstractModel, dest: AbstractModel) {
    if (model.getId() != dest.getId())
      this.modelsService.moveModel(model, dest)
  }

  decorateModel(model: AbstractModel, decorator: ModelTypes) {
    this.modelsService.decorateModel(model, decorator)
  }

  asGameModel = (model: AbstractModel): GameModel => model as GameModel

}
