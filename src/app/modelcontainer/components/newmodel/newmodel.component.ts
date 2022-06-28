import { ModelService } from './../../../../services/model.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newmodel',
  templateUrl: './newmodel.component.html',
  styleUrls: ['./newmodel.component.scss']
})
export class NewmodelComponent implements OnInit {

  constructor(private modelsService: ModelService) { }

  ngOnInit(): void {
  }

  addNewModel(type: "model" | "collection") {
    this.modelsService.addNewModel(type)
  }

}
