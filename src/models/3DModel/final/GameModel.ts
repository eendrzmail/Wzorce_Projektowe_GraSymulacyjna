import { TextureQuality } from '../../Enums/GameModelEnums';
import { ModelDecorator } from '../Model.decorator';

export class GameModel extends ModelDecorator {
    private textureQuality!: TextureQuality;
    private UVunwrapped: boolean = false;
    private rigged: boolean = false;

    public isRigged = () => this.rigged

    public rig() {
        this.rigged = true;
    }

    public getTextureQuality = () => this.textureQuality

    public texture(quality: TextureQuality) {
        if (!this.UVunwrapped)
            return new Error("Model is not UV unwrapped")
        this.textureQuality = quality;
        return true
    }

    public unwrap() {
        this.UVunwrapped = true;
    }

    public isUVunwrapped = () => this.UVunwrapped;
}