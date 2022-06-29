import { AbstractModel } from "../3DModel/Model.abstract";

export abstract class AbstractModifier {
    parent!: AbstractModel;

    constructor(parent: AbstractModel) {
        this.parent = parent;
    }

    public abstract apply(): void;
}