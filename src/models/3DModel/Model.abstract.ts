import { AbstractModifier } from "../Modifiers/Modifier.abstract";

export abstract class AbstractModel {

    protected id = Date.now() + +((Math.random() * 10).toFixed());
    public name = 'Nowy model';
    protected composite!: boolean;
    protected polygonCount: number = 0;
    protected modifiers: Set<AbstractModifier> = new Set<AbstractModifier>();
    protected timeSpent: number = 0;
    protected parent: AbstractModel | null = null;

    public getId() {
        return this.id;
    }

    public isComposite() {
        return this.composite;
    }

    public setName(name: string) {
        this.name = name;
    }
    public getName() {
        return this.name;
    }

    public setTimeSpent(minutes: number) {
        this.timeSpent = minutes;
    }
    public getTimeSpent() {
        return this.timeSpent;
    }

    public setPolygonCount(number: number) {
        this.polygonCount = number
    }
    public getPolygonCount() {
        return this.polygonCount;
    }

    public setParent(parent: AbstractModel): void {
        this.parent = parent
    }

    public getParent(): AbstractModel | null {
        return this.parent
    }

    public addModifier(modifier: AbstractModifier) {
        this.modifiers.add(modifier);
    }

    public getModifiers = (): Set<AbstractModifier> => this.modifiers

    public applyAllModifiers() {
        for (let m of this.modifiers) {
            m.apply(this)
            this.modifiers.delete(m)
        }
    }

    public removeModifier(modifier: AbstractModifier) {
        this.modifiers.delete(modifier)
    }

    public abstract addModel(AbstractModel: AbstractModel): boolean
    public abstract removeModel(AbstractModel: AbstractModel): void
    public abstract getModels(): AbstractModel[]
    public abstract modelGeometry(): void

}