import { find } from 'rxjs/operators';
import { TextureQuality } from './../models/Enums/GameModelEnums';
import { AbstractModel } from 'src/models/3DModel/Model.abstract';
import { TaskBuilder } from './../models/Task/Task.abstract';
import { Injectable } from '@angular/core';
import { GameModel } from 'src/models/3DModel/final/GameModel';
import { Render } from 'src/models/3DModel/final/Render';
import { ArchVizModel } from 'src/models/3DModel/final/ArchVizModel';
import { PrintModel } from 'src/models/3DModel/final/3DPrintModel';
import { PrintingMaterials } from 'src/models/Enums/3DPrintModelEnums';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() {

  }

  taskList = [
    new TaskBuilder({
      desc: "Stwórz GameModel",
      longDesc: "Stwórz jakikolwiek model do gry",
      goalFn: (models: AbstractModel[]) => models.some(x => x.className == "GameModel"),
      pointsFn: (models: AbstractModel[]) => 100
    }),
    new TaskBuilder({
      desc: "Stwórz model do gry mobilnej, przygotowany pod animacje",
      longDesc: "Model powinien mieć ok. 5 000 vertexów, mieć kości oraz tekstury 1024px",
      goalFn: (models: AbstractModel[]) => models.some(x => {
        const y: GameModel = this.asGameModel(x)
        const txtr = y.getTextureQuality() as any
        return y.getPolygonCount() > 3000 &&
          y.getPolygonCount() < 7000 &&
          y.isRigged() &&
          txtr.index == TextureQuality.q1024px
      }),
      pointsFn: (models: AbstractModel[]) => 100
    }),
    new TaskBuilder({
      desc: "Stwórz kolekcję do wizualizacji architektonicznej ",
      longDesc: `Umieść 2 modele w kolekcji \nKolekcja musi być modelem ArchViz \nZrób render poglądowy`,
      goalFn: (models: AbstractModel[]) => models.some(x => {
        const y: ArchVizModel = this.asArchVizModel(x);

        return y.isComposite() &&
          y.className == 'ArchVizModel' &&
          y.getModels().length == 2 &&
          y.getModels().every(z => !z.isComposite()) &&
          y.isRendered()
      }),
      pointsFn: (models: AbstractModel[]) => 100
    }),
    new TaskBuilder({
      desc: "Zrób 2 modele postaci do gry i przekaż je do teksturowania",
      longDesc: `Stwórz 2 modele do gier, które będą przekazane kolejnemu artyście do dokończenia\n
       Modele powinny mieć po ok. 18 000 vertexów
       (Podpowiedź: możesz skorzystać z modyfikatora Mirror do symetrycznego odbicia postaci, a później modyfikatora Subdivision Surface, który dzieli każdą ścianę na 4, zwiększając rozdzielczość siatki) \n
       Do tekturowania, model musi mieć rozłożoną UV mapę.

       Musisz zmieścić się w 40h (łącznie)
       `,
      goalFn: (models: AbstractModel[]) => {
        let time = models.map(x => x.getTimeSpent()).reduce((a, c) => a += c)
        let mod = [];
        mod = models.map(x => {
          let y = this.asGameModel(x)
          return y.getPolygonCount() > 10000 &&
            y.getPolygonCount() < 30000 &&
            y.isUVunwrapped()
        })
        return (time < 40 * 60) && mod.length >= 2 && mod.every(v => v);
      },
      pointsFn: (models: AbstractModel[]) => 100
    }),
    new TaskBuilder({
      desc: "Stwórz Figurkę do druku 3D",
      longDesc: `Stwórz model zwierzęciado druku 3D z wygładzonymi ścianami, ale z możliwością ich zatwierdzenia lub nie.
      Powinien mieć ok. 10 000 vertexów przed zatwierdzeniem modyfikatorów
      (model jest symetryczny, może być z niezatwierdzonym modyfikatorem mirror)
      Jako materiału druku, użyj żywicy.`,
      goalFn: (models: AbstractModel[]) => models.some(x => {
        let y = this.asPrintModel(x)
        const txtr = y.getMaterial() as any

        return y.className == "PrintModel" &&
          Array.from(y.getModifiers()).find(m => m.className == 'SubdivisionSurfaceModifier') &&
          y.getPolygonCount() > 8000 &&
          txtr?.index == PrintingMaterials.Żywica
      }),
      pointsFn: (models: AbstractModel[]) => 100
    }),
    new TaskBuilder({
      desc: "Wizualizacja działki",
      longDesc: `Stwórz wizualizację architektoniczną działki dla klienta.
      Działka zawiera: Dom (który powinien mieć osobno wymodelowany dach oraz ściany), basen
      Dach powinien być otektsurowany w 4k, natomiast ściany oraz basen mają korzystać z materiałów proceduralnych
      Wykonaj Render całości.

      Podpowiedź: basen możesz wymodelować w 1/4 i odboć go w osiach X oraz Y modyfikatorem Mirror`,
      goalFn: (models: AbstractModel[]) => models.some(x => {
        let y = this.asArchVizModel(x)
        let children = Array.from(x.getModels())

        return y.className == "ArchVizModel" &&
          y.isComposite() &&
          y.isRendered() &&
          children.find(c => {
            let childrenModels = Array.from(c.getModels())
            return c.isComposite() &&
              childrenModels.length >= 2 &&
              childrenModels.find(cc => {
                let ccy = this.asArchVizModel(cc)
                const txtr = ccy.getTextureQuality() as any
                return txtr?.index == TextureQuality.q4k || false
              }) &&
              childrenModels.find(cc => {
                let ccy = this.asArchVizModel(cc)
                return ccy.hasMaterials() || false
              })
          }) &&
          children.length >= 2 &&
          children.find(cc => {
            let ccy = this.asArchVizModel(cc)
            return ccy.hasMaterials() || false
          })
      }),
      pointsFn: (models: AbstractModel[]) => 100
    }),
    new TaskBuilder({
      desc: "Stwórz kompletny model 3D do druku",
      longDesc: `Stwórz symetryczną figurkę do druku 3D w plastiku
      Model powinien mieć wygładzone krawędzie (niezatwierdzone) oraz być przygotowanym do druku
       `,
      goalFn: (models: AbstractModel[]) => models.some(x => {
        let y = this.asPrintModel(x)
        let mods = Array.from(y.getModifiers())
        const txtr = y.getMaterial() as any

        return y.className == "PrintModel" &&
          Array.from(y.getModifiers()).find(m => m.className == 'SubdivisionSurfaceModifier') &&
          mods.find(m => m.className == 'MirrorModifier') &&
          mods.find(m => m.className == 'SubdivisionSurfaceModifier') &&
          y.isProcessed() &&
          txtr?.index == PrintingMaterials.Plastik
      }),
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
      this.pointsEarned += points;
      return this.incrementTask() ? true : "finish"
    }
    else {
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

  asGameModel = (model: AbstractModel): GameModel => model as GameModel
  asRenderModel = (model: AbstractModel): Render => model as Render
  asArchVizModel = (model: AbstractModel): ArchVizModel => model as ArchVizModel
  asPrintModel = (model: AbstractModel): PrintModel => model as PrintModel
}
