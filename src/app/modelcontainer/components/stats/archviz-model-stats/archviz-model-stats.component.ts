import { ArchVizModel } from './../../../../../models/3DModel/final/ArchVizModel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-archviz-model-stats',
  templateUrl: './archviz-model-stats.component.html',
  styleUrls: ['./archviz-model-stats.component.scss']
})
export class ArchvizModelStatsComponent implements OnInit {

  constructor() { }

  @Input() model!: ArchVizModel;

  ngOnInit(): void {
  }

}
