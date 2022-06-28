import { AbstractModel } from 'src/models/3DModel/Model.abstract';
import { CompositeModel } from './../models/3DModel/CompositeModel';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Model } from 'src/models/3DModel/SimpleModel';
import { GameModel } from 'src/models/3DModel/final/GameModel';
import { filter, find, first, map, mergeAll, take, single } from 'rxjs/operators';


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

  findModelRecursive(model: AbstractModel, id: number | null): AbstractModel | undefined {
    if (model.getId() == id) return model
    for (let i of model.getModels()) return this.findModelRecursive(i, id)
    return undefined
  }

  findModel(array: AbstractModel[]) {
    return array.find(y => y.getId() == this.selectedModelId)
  }

  getSelectedModel = () => this.createdModels$.pipe(
    map(x => this.findModel(x))
  )

  getModelsObservable(): Observable<AbstractModel[]> {
    return this.createdModels$
  }

  getCompositesObservable():Observable<AbstractModel[]> {
    return this.createdModels$.pipe(
      map(a => a.filter(x => x.isComposite()))
    )
  }

  addNewModel(type: "model" | "collection") {
    let newModel = type == "model" ? new Model() : new CompositeModel();
    this.subject.next([newModel, ...this.subject.getValue()])
  }

  moveModel(model: AbstractModel, dest: AbstractModel) {
    if (model === dest) return
    if (model.getParent() == dest) return

      const oldParent = model.getParent()
    if (!oldParent) {
      this.subject.next(this.subject.value.filter(x => x != model))
      dest.addModel(model) ? null : this.subject.next([model, ...this.subject.getValue()])
    }
    else {
      if (dest.addModel(model)) {
        oldParent.removeModel(model);
      }
    }
  }

  decorateModel(model: AbstractModel, decorator: string) {

    let newModel = new GameModel(model)

    newModel.setName(model.getName())
    this.subject.next([...this.subject.value.filter( x => x != model), newModel]) 
  }

}
