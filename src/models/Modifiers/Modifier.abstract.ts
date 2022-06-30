import { AbstractModel } from "../3DModel/Model.abstract";

export abstract class AbstractModifier {
    parent!: AbstractModel;
    readonly className: String = "AbstractModifier";

    constructor(parent: AbstractModel) {
        this.parent = parent;
    }

    public abstract apply(): void;
}