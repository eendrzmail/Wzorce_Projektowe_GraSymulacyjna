import { ModelTypes } from './../models/Enums/ModelDecorators';
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

  findModel(array: AbstractModel[]) {
    return array.find(y => y.getId() == this.selectedModelId)
  }

  getSelectedModel = () => this.createdModels$.pipe(
    map(x => this.findModel(x))
  )

  getModelsObservable(): Observable<AbstractModel[]> {
    return this.createdModels$
  }

  getCompositesObservable(): Observable<AbstractModel[]> {
    return this.createdModels$.pipe(
      map(a => this.flatten(a).filter((x: AbstractModel) => x.isComposite()))
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

  decorateModel(model: AbstractModel, decorator: ModelTypes) {

    let newModel = new GameModel(model)

    newModel.setName(model.getName())

    this.subject.next([newModel, ...this.subject.value.filter(x => x != model)])
    model.getParent() ? model.getParent()?.removeModel(model) : null

  }

  private flatten(xs: AbstractModel[]) {
    return xs.reduce((acc: any, x: AbstractModel) => {
      acc = acc.concat(x);
      let ar = (x.getModels());
      if (ar) {
        x = Object.assign({}, x)
        acc = acc.concat(this.flatten(ar));
      }
      return acc;
    }, []);
  }

}
