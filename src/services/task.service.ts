import { AbstractModel } from 'src/models/3DModel/Model.abstract';
import { TaskBuilder } from './../models/Task/Task.abstract';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskList = [
    new TaskBuilder({
      desc: "Stwórz GameModel z teksturami 4k",
      longDesc: "",
      goalFn: (models: AbstractModel[]) => true,
      pointsFn: (models: AbstractModel[]) => 100
    }),
  ]

  currentTask = 0;
  pointsEarned = 0;

  getCurrentTask = () => this.taskList[this.currentTask]
  getPointsEarned = () => this.pointsEarned
  resetTasks = () => this.currentTask = 0;


  completeCurrentTask(models: AbstractModel[]): boolean | "finish" {
    let points = this.taskList[this.currentTask].complete(models)
    if (points) {
      console.log("jeaaaa");
      this.pointsEarned += points;
      return this.incrementTask() ? true : "finish"
    }
    else {
      console.log("coś nie tak");
      return false
    }
  }

  private incrementTask() {
    if (this.currentTask < this.taskList.length - 1) {
      this.currentTask++
      return true
    }
    return false
  }

  constructor() { }
}
