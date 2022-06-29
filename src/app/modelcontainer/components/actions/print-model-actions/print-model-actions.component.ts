import { PrintingMaterials } from './../../../../../models/Enums/3DPrintModelEnums';
import { Component, Input, OnInit } from '@angular/core';
import { PrintModel } from 'src/models/3DModel/final/3DPrintModel';

@Component({
  selector: 'app-print-model-actions',
  templateUrl: './print-model-actions.component.html',
  styleUrls: ['./print-model-actions.component.scss']
})
export class PrintModelActionsComponent implements OnInit {

  constructor() { }

  @Input() model!: PrintModel;

  materialEnum = PrintingMaterials;
  selectedMaterial: any;

  ngOnInit(): void {
  }

  setMaterial() {
    this.model.setMaterial(this.selectedMaterial)
  }

}
