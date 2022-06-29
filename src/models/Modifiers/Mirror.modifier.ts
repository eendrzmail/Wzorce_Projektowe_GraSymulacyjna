import { AbstractModel } from "../3DModel/Model.abstract";
import { AbstractModifier } from "./Modifier.abstract";

export class MirrorModifier extends AbstractModifier {

    public apply(): void {
        this.parent.setPolygonCount(this.parent.getPolygonCount() * 2)
        // parent.setPolygonCount(parent.getPolygonCount() * 2)
        this.parent.removeModifier(this)
    }

}