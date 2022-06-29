import { TextureQuality } from 'src/models/Enums/GameModelEnums';
import { ModelDecorator } from '../Model.decorator';

export class ArchVizModel extends ModelDecorator {
    private lighting: boolean = false;
    private materials: boolean = false;
    private rendered: boolean = false;
    private textureQuality!: TextureQuality;
    private UVunwrapped: boolean = false;

    public hasLighting = () => this.lighting;
    public makeLighting = () => {
        this.lighting = true
    };

    public hasMaterials = () => this.materials;
    public setMaterials = () => {
        this.materials = true;
        this.addTimeSpent(Math.max(this.getPolygonCount() / 500, 10));
    }

    public isRendered = () => this.rendered;
    public render() {
        this.rendered = true;
        this.addTimeSpent(this.getPolygonCount() / 500);
    }

    public getTextureQuality = () => this.textureQuality
    public texture(quality: TextureQuality) {
        if (!this.UVunwrapped)
            return new Error("Model is not UV unwrapped")
        this.textureQuality = quality;
        this.addTimeSpent(60);
        return true
    }

    public isUVunwrapped = () => this.UVunwrapped;
    public unwrap() {
        this.UVunwrapped = true;
        this.addTimeSpent(60);
    }


}