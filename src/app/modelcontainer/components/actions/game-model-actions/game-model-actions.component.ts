import { Component, Input, OnInit } from '@angular/core';
import { GameModel } from 'src/models/3DModel/final/GameModel';
import { TextureQuality } from 'src/models/Enums/GameModelEnums';


@Component({
  selector: 'app-game-model-actions',
  templateUrl: './game-model-actions.component.html',
  styleUrls: ['./game-model-actions.component.scss']
})
export class GameModelActionsComponent implements OnInit {

  constructor() { }

  textureQualityEnum = TextureQuality;
  selectedTexture: TextureQuality | null = null;

  @Input() model!: GameModel;

  ngOnInit(): void {
  }

  texture() {
    if (this.selectedTexture) {
      this.model.texture(this.selectedTexture)
    }
  }

}
