import { AbstractModel } from "./Model.abstract";

export class CompositeModel extends AbstractModel {

    protected models: AbstractModel[] = [];
    static instanceCounter = 0;

    constructor() {
        super();
        this.composite = true;
        this.setName(`Kolekcja ${++CompositeModel.instanceCounter}`)
    }

    public addModel(AbstractModel: AbstractModel): boolean {
        return !!this.models.push(AbstractModel)
    }

    public removeModel(AbstractModel: AbstractModel): void {
        this.models = this.models.filter(m => m != AbstractModel)
    }

    public getModels(): AbstractModel[] {
        return [...this.models]
    }

    public modelGeometry(): void { }


}