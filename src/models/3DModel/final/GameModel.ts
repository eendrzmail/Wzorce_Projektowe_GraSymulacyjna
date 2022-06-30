import { TextureQuality } from '../../Enums/GameModelEnums';
import { ModelDecorator } from '../Model.decorator';

export class GameModel extends ModelDecorator {
    private textureQuality!: TextureQuality;
    private UVunwrapped: boolean = false;
    private rigged: boolean = false;
    readonly className: String = "GameModel";

    public isRigged = () => this.rigged

    public rig() {
        this.rigged = true;
        this.addTimeSpent(60)
    }

    public getTextureQuality = () => this.textureQuality

    public texture(quality: TextureQuality) {
        if (!this.UVunwrapped)
            return new Error("Model is not UV unwrapped")
        this.textureQuality = quality;
        this.addTimeSpent(60);
        return true
    }

    public unwrap() {
        this.UVunwrapped = true;
        this.addTimeSpent(60);
    }

    public isUVunwrapped = () => this.UVunwrapped;
}