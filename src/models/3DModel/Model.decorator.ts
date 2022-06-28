import { AbstractModifier } from "../Modifiers/Modifier.abstract";
import { AbstractModel } from "./Model.abstract"

export class ModelDecorator extends AbstractModel {
    protected model!: AbstractModel;

    constructor(model: AbstractModel) {
        super();
        // Object.assign(this, model)
        this.model = model;
        this.modifiers = model.getModifiers()
    }

    public isComposite(): boolean {
        return this.model.isComposite();
    }

    public addModel(AbstractModel: AbstractModel): boolean {
        return this.model.addModel(AbstractModel);
    }
    public removeModel(AbstractModel: AbstractModel): void {
        this.model.removeModel(AbstractModel);
    }
    public setTimeSpent(minutes: number) {
        this.model.setTimeSpent(minutes);
    }
    public getTimeSpent() {
        return this.model.getTimeSpent();
    }
    public setPolygonCount(number: number) {
        this.model.setPolygonCount(number);
    }
    public getPolygonCount() {
        return this.model.getPolygonCount();
    }
    public addModifier(modifier: AbstractModifier) {
        this.model.addModifier(modifier);
    }
    public applyAllModifiers() {
        this.model.applyAllModifiers()
    }
    public removeModifier(modifier: AbstractModifier) {
        this.model.removeModifier(modifier)
    }

    public getModels = () => this.model.getModels();

    public modelGeometry(): void { }
}