import { AbstractModel } from "../3DModel/Model.abstract";
import { AbstractModifier } from "./Modifier.abstract";

export class RemeshModifier extends AbstractModifier {

    readonly className: String = "RemeshModifier";


    public apply(): void {
        this.parent.setPolygonCount(Math.floor(this.parent.getPolygonCount() / 4))
        this.parent.removeModifier(this)
    }

}