import { AbstractModel } from "./Model.abstract";

export class Model extends AbstractModel {

    static instanceCounter = 0;

    constructor() {
        super();
        this.composite = false;
        this.setName(`Nowy model ${++Model.instanceCounter}`)
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