import { ModelDecorator } from '../Model.decorator';
import { PrintingMaterials } from '../../Enums/3DPrintModelEnums';


export class PrintModel extends ModelDecorator {
    private processed: boolean = false;
    private material!: PrintingMaterials;
    private supports: boolean = false;

    public isProcessed = () => this.processed;
    public process = () => {
        this.processed = true;
        this.addTimeSpent(Math.max(this.getPolygonCount() / 200, 10));
    };

    public getMaterial = () => this.material;
    public setMaterial = (material: PrintingMaterials) => {
        this.material = material;
        this.addTimeSpent(2);
    }

    public hasSupports = () => this.supports;
    public makeSupports() {
        this.supports = true;
        this.addTimeSpent(Math.max(this.getPolygonCount() / 1000, 10));
    }

}