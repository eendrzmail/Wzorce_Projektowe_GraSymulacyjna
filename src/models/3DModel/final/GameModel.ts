import { TextureQuality } from '../../Enums/GameModelEnums';
import { ModelDecorator } from '../Model.decorator';

export class GameModel extends ModelDecorator {
    private textureQuality!: TextureQuality;
    private UVunwrapped!: boolean;
    private rigged!: boolean;

    public rig() {
        this.rigged = true;
    }

    public texture(quality: TextureQuality) {
        if (!this.UVunwrapped)
            return new Error("Model is not UV unwrapped")
        this.textureQuality = quality;
    }

    public unwrap() {
        this.UVunwrapped = true;
    }
}