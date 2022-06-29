import { PrintModel } from './../../../../../models/3DModel/final/3DPrintModel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-model-stats',
  templateUrl: './print-model-stats.component.html',
  styleUrls: ['./print-model-stats.component.scss']
})
export class PrintModelStatsComponent implements OnInit {

  constructor() { }

  @Input() model!: PrintModel;

  ngOnInit(): void {
  }

}
