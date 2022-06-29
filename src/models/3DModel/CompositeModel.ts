import { AbstractModel } from "./Model.abstract";

export class CompositeModel extends AbstractModel {

    protected models: AbstractModel[] = [];
    static instanceCounter = 0;

    constructor() {
        super();
        this.composite = true;
        this.setName(`Kolekcja ${++CompositeModel.instanceCounter}`)
    }

    public getTimeSpent(): number {
        let childTime = this.models.length > 0
            ? this.models
                .map(x => x.getTimeSpent())
                .reduce((acc: number, curr: number) => acc += curr)
            : 0
        return this.timeSpent + childTime
    }

    public getPolygonCount(): number {
        let childPolygonCount = this.models.length > 0
            ? this.models
                .map(x => x.getPolygonCount())
                .reduce((acc: number, curr: number) => acc += curr)
            : 0
        return this.timeSpent + childPolygonCount
    }

    public addModel(AbstractModel: AbstractModel): boolean {
        this.models.push(AbstractModel)
        AbstractModel.setParent(this)
        return true
    }

    public removeModel(AbstractModel: AbstractModel): void {
        this.models = this.models.filter(m => m != AbstractModel)
    }

    public getModels(): AbstractModel[] {
        return this.models
    }

    public modelGeometry(): void { }


}