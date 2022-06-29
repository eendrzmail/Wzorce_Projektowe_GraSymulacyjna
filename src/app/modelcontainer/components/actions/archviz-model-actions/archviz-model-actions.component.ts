import { ArchVizModel } from './../../../../../models/3DModel/final/ArchVizModel';
import { Component, Input, OnInit } from '@angular/core';
import { TextureQuality } from 'src/models/Enums/GameModelEnums';

@Component({
  selector: 'app-archviz-model-actions',
  templateUrl: './archviz-model-actions.component.html',
  styleUrls: ['./archviz-model-actions.component.scss']
})
export class ArchvizModelActionsComponent implements OnInit {

  constructor() { }

  @Input() model!: ArchVizModel;

  textureQualityEnum = TextureQuality;
  selectedTexture: TextureQuality | null = null;

  ngOnInit(): void {
  }

  texture() {
    if (this.selectedTexture) {
      this.model.texture(this.selectedTexture)
    }
  }

}
