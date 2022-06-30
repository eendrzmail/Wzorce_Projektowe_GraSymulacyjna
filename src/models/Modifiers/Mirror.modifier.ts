import { AbstractModel } from "../3DModel/Model.abstract";
import { AbstractModifier } from "./Modifier.abstract";

export class MirrorModifier extends AbstractModifier {

    readonly className: String = "MirrorModifier";


    public apply(): void {
        this.parent.setPolygonCount(this.parent.getPolygonCount() * 2)
        // parent.setPolygonCount(parent.getPolygonCount() * 2)
        this.parent.removeModifier(this)
    }

}