import { ModelService } from './../../../../services/model.service';
import { AbstractModel } from 'src/models/3DModel/Model.abstract';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  constructor(private modelService: ModelService) { }

  @Input() model!: AbstractModel;
  @Output() changeModel = new EventEmitter<AbstractModel | undefined>();

  ngOnInit(): void {
  }

  selectModel(model: AbstractModel | undefined) {
    this.changeModel.emit(model)
  }

}
