import { AbstractModel } from 'src/models/3DModel/Model.abstract';
import { ModelDecorator } from '../Model.decorator';

export class Render extends ModelDecorator {
    private lighting: boolean = false;
    private materials: boolean = false;
    private rendered: boolean = false;
    private camera: boolean = false;

    public hasLighting = () => this.lighting;
    public makeLighting = () => {
        this.lighting = true
        this.addTimeSpent((this.getPolygonCount() / 1000) * 60);
    };

    public hasMaterials = () => this.materials;
    public setMaterials = () => {
        this.materials = true;
        this.addTimeSpent(Math.max((this.getPolygonCount() / 1000) * 60, 10));
    }

    public isRendered = () => this.rendered;
    public render() {
        this.rendered = true;
        this.addTimeSpent(this.getPolygonCount() / 60);
    }

    public isCameraSet = () => this.camera;
    public setCamera() {
        this.camera = true;
        this.addTimeSpent(60);
    }

}