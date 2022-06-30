import { ModelService } from './../../services/model.service';
import { Component, OnInit } from '@angular/core';
import { Model } from 'src/models/3DModel/SimpleModel';
import { AbstractModel } from 'src/models/3DModel/Model.abstract';

@Component({
  selector: 'app-gamecontainer',
  templateUrl: './gamecontainer.component.html',
  styleUrls: ['./gamecontainer.component.scss']
})
export class GamecontainerComponent implements OnInit {

  constructor(
    public modelService: ModelService
  ) { }

  models = this.modelService.getModelsObservable()
  getSelectedModel = this.modelService.getSelectedModel()
  model!: AbstractModel | undefined;

  ngOnInit(): void {
    this.getSelectedModel.subscribe(x => {
      this.model = x ? x : undefined
    })
  }

  selectModel(model: AbstractModel | undefined) {
    this.model = model;
    // this.modelService.selectModel(model)
  }

  resetModels() {
    this.modelService.resetModels()
  }


}
