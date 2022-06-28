import { MirrorModifier } from './../../../../models/Modifiers/Mirror.modifier';
import { AbstractModel } from 'src/models/3DModel/Model.abstract';
import { Component, Input, OnInit } from '@angular/core';
import { ModelModifiers } from 'src/models/Enums/ModelModifierEnum';

@Component({
  selector: 'app-model-modifiers',
  templateUrl: './model-modifiers.component.html',
  styleUrls: ['./model-modifiers.component.scss']
})
export class ModelModifiersComponent implements OnInit {

  constructor() { }

  @Input() model!: AbstractModel;

  enum = ModelModifiers


  ngOnInit(): void {
  }

  addModifier(modifier: ModelModifiers) {
    switch (modifier) {
      case ModelModifiers.Mirror: {
        let modifier = new MirrorModifier()
        this.model.addModifier(modifier)
        break;
      }
    }

    console.log(this.model);

  }

}
