import { TextureQuality } from '../../Enums/GameModelEnums';
import { ModelDecorator } from '../Model.decorator';

export class Render extends ModelDecorator {
    private lighting: boolean = false;
    private materials: boolean = false;
    private rendered: boolean = true;

    public hasLighting = () => this.lighting;
    public makeLighting = () => {
        this.lighting ? this.lighting = true : null
        };

    public hasMetarials = () => this.materials;
    public setMaterials = () => {
        this.materials = true;
        this.addTimeSpent(60);
    }
    


}