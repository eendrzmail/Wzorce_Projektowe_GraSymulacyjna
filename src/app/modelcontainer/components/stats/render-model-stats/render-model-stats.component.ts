import { Component, Input, OnInit } from '@angular/core';
import { Render } from 'src/models/3DModel/final/Render';

@Component({
  selector: 'app-render-model-stats',
  templateUrl: './render-model-stats.component.html',
  styleUrls: ['./render-model-stats.component.scss']
})
export class RenderModelStatsComponent implements OnInit {

  constructor() { }

  @Input() model!: Render;


  ngOnInit(): void {
  }

}
