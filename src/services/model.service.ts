import { AbstractModel } from 'src/models/3DModel/Model.abstract';
import { CompositeModel } from './../models/3DModel/CompositeModel';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Model } from 'src/models/3DModel/SimpleModel';
import { find, first, map, mergeAll, take, single } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ModelService {

  selectedModelId: number | null = null;
  selected!: AbstractModel | null;

  private subject = new BehaviorSubject<AbstractModel[]>([]);
  createdModels$: Observable<AbstractModel[]> = this.subject.asObservable();

  constructor() {
  }

  selectModel(model: AbstractModel | null) {
    model
      ? this.selectedModelId = model.getId()
      : this.selectedModelId = null
    this.subject.next(this.subject.getValue())
  }

  selectModel2(model: AbstractModel | null) {
    this.selected = model
  }

  findModelRecursive(model: AbstractModel, id: number | null): AbstractModel | undefined {
    if (model.getId() == id) return model
    for (let i of model.getModels()) return this.findModelRecursive(i, id)
    return undefined
  }

  // getSelectedModel = () => this.createdModels$.pipe(
  //   // map(x => x.find(y => y.getId() == this.selectedModelId))
  //   map(x => x.find(y => this.findModelRecursive(y, this.selectedModelId)))
  // )
  getSelectedModel = () => new BehaviorSubject<AbstractModel | null>(this.selected).asObservable()

  getModelsObservable(): Observable<AbstractModel[]> {
    return this.createdModels$
  }

  addNewModel(type: "model" | "collection") {
    let newModel = type == "model" ? new Model() : new CompositeModel();
    this.subject.next([newModel, ...this.subject.getValue()])
  }

  moveModel(model: AbstractModel, dest: AbstractModel) {
    if (model === dest)
      return
    this.subject.next(this.subject.value.filter(x => x != model))
    dest.addModel(model) ? null : this.subject.next([model, ...this.subject.getValue()])
  }

}