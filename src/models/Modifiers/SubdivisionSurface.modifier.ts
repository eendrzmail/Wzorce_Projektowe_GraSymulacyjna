import { AbstractModel } from "../3DModel/Model.abstract";
import { AbstractModifier } from "./Modifier.abstract";

export class SubdivisionSurfaceModifier extends AbstractModifier {

    public apply(): void {
        this.parent.setPolygonCount(this.parent.getPolygonCount() * 4)
        this.parent.removeModifier(this)
    }

}