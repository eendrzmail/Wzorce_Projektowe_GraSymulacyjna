import { TaskService } from './../../services/task.service';
import { TaskBuilder } from './../../models/Task/Task.abstract';
import { ModelService } from './../../services/model.service';
import { AbstractModel } from 'src/models/3DModel/Model.abstract';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor(
    private modelsService: ModelService,
    private taskService: TaskService
  ) { }

  currentTask: TaskBuilder = this.taskService.getCurrentTask();

  models$ = this.modelsService.getModelsObservable().subscribe(x => {
    this.models = x
  })

  models!: AbstractModel[];

  ngOnInit(): void {
  }

  completeTask() {
    switch (this.taskService.completeCurrentTask(this.models)) {
      case true:
        this.currentTask = this.taskService.getCurrentTask()
        break;
      case false:
        break;
      case "finish":
        console.log("gra skończona");

        break;
    }
  }

}
