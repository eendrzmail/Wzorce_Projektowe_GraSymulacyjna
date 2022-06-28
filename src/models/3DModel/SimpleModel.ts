import { AbstractModel } from "./Model.abstract";

export class Model extends AbstractModel {

    constructor() {
        super();
        this.composite = false;
    }

    public addModel(AbstractModel: AbstractModel): boolean {
        return false
    }
    public removeModel(AbstractModel: AbstractModel): void {
        return
    }
    public modelGeometry(): void {

    }

    public getModels(): AbstractModel[] {
        return []
    }

}