import { AbstractModel } from "../3DModel/Model.abstract";
import { AbstractModifier } from "./Modifier.abstract";

export class MirrorModifier extends AbstractModifier {

    public apply(parent: AbstractModel): void {
        parent.setPolygonCount(parent.getPolygonCount() * 2)
    }

}