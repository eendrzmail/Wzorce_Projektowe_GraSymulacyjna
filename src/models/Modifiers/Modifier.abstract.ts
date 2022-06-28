import { AbstractModel } from "../3DModel/Model.abstract";

export abstract class AbstractModifier {

    public abstract apply(parent: AbstractModel): void;
}