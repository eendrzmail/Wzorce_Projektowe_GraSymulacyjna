import { AbstractModel } from "../3DModel/Model.abstract";

interface TaskProps {
    desc: string;
    longDesc: string;
    goalFn: (models: AbstractModel[]) => boolean;
    pointsFn: (models: AbstractModel[]) => number;
}

export class TaskBuilder {

    public description: string = "";
    public longDescription: string = "";
    private goal!: (models: AbstractModel[]) => boolean;
    private points!: (models: AbstractModel[]) => number;

    constructor(props: TaskProps) {
        this.description = props.desc;
        this.longDescription = props.longDesc;
        this.goal = props.goalFn;;
        this.points = props.pointsFn;
    }

    public complete(models: AbstractModel[]): number | null {
        if (this.goal(models))
            return this.points(models);
        return null
    }
}