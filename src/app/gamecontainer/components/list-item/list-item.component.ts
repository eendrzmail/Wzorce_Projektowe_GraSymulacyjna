import { ModelService } from './../../../../services/model.service';
import { AbstractModel } from 'src/models/3DModel/Model.abstract';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  constructor(private modelService: ModelService) { }

  @Input() model!: AbstractModel;

  ngOnInit(): void {
  }

  selectModel(model: AbstractModel | null) {
    console.log(model);

    this.modelService.selectModel(model)
  }

}
