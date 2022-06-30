import { TaskService } from './../../services/task.service';
import { TaskBuilder } from './../../models/Task/Task.abstract';
import { ModelService } from './../../services/model.service';
import { AbstractModel } from 'src/models/3DModel/Model.abstract';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor(
    private modelsService: ModelService,
    private taskService: TaskService,
    private _snackBar: MatSnackBar
  ) { }

  currentTask: TaskBuilder = this.taskService.getCurrentTask();

  models$ = this.modelsService.getModelsObservable().subscribe(x => {
    this.models = x
  })

  models!: AbstractModel[];

  ngOnInit(): void {
  }

  completeTask() {
    try {
      switch (this.taskService.completeCurrentTask(this.models)) {
        case true:
          this.currentTask = this.taskService.getCurrentTask()
          this.openSnackBar("✅ Zadanie wykoanane", "Schowaj", 'green')
          break;
        case false:
          this.openSnackBar("Coś nie tak, zmodyfikuj modele i spróbuj jeszcze raz", "Schowaj", 'red')
          return;
          break;
        case "finish":
          console.log("gra skończona");
          this.openSnackBar("🥳 Gratulacje! Gra skończona", "Schowaj", "blue")

          break;
      }

      this.modelsService.resetModels();
    }
    catch (e) {
      this.openSnackBar("Coś nie tak, zmodyfikuj modele i spróbuj jeszcze raz", "Schowaj", 'red')
    }

  }

  private openSnackBar(message: string, action: string, type: "green" | "red" | "blue") {
    this._snackBar.open(message, action, { panelClass: type, duration: 5000 });
  }

}
