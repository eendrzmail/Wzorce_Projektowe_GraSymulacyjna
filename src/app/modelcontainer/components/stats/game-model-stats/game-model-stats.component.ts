import { AbstractModel } from 'src/models/3DModel/Model.abstract';
import { GameModel } from './../../../../../models/3DModel/final/GameModel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-model-stats',
  templateUrl: './game-model-stats.component.html',
  styleUrls: ['./game-model-stats.component.scss']
})
export class GameModelStatsComponent implements OnInit {

  constructor() { }

  @Input() model!: GameModel;


  ngOnInit(): void {
  }

}
