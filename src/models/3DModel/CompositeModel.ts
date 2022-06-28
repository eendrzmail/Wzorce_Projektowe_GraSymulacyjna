import { AbstractModel } from "./Model.abstract";

export class CompositeModel extends AbstractModel {

    protected models: AbstractModel[] = [];

    constructor() {
        super();
        this.composite = true;
        this.setName("Kompozyt")
    }

    public addModel(AbstractModel: AbstractModel): boolean {
        return !!this.models.push(AbstractModel)
    }

    public removeModel(AbstractModel: AbstractModel): void {
        this.models = this.models.filter(m => m != AbstractModel)
    }

    public getModels(): AbstractModel[] {
        return this.models
    }

    public modelGeometry(): void { }


}