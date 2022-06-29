import { Render } from './../../../../../models/3DModel/final/Render';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-render-model-actions',
  templateUrl: './render-model-actions.component.html',
  styleUrls: ['./render-model-actions.component.scss']
})
export class RenderModelActionsComponent implements OnInit {

  constructor() { }

  @Input() model!: Render;


  ngOnInit(): void {
  }

}
