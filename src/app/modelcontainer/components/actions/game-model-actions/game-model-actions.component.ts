import { Component, Input, OnInit } from '@angular/core';
import { GameModel } from 'src/models/3DModel/final/GameModel';

@Component({
  selector: 'app-game-model-actions',
  templateUrl: './game-model-actions.component.html',
  styleUrls: ['./game-model-actions.component.scss']
})
export class GameModelActionsComponent implements OnInit {

  constructor() { }

  @Input() model!: GameModel;

  ngOnInit(): void {
  }

}
