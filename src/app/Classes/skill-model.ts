import { SkillModelBuilder } from "./skill-model-builder";

export class SkillModel {
    private _langage: string ;
    private _level: number;
    private _yearOfExperence: string;
    private _description: string;
    private _evaluation: string;

    constructor(builder: SkillModelBuilder)
    {
        this._langage = builder.langage;
        this._level = builder.level;
        this._yearOfExperence = builder.yearOfExperience;
        this._description = builder.description;
        this._evaluation = builder.evaluation;
    }

  public get Langage() {
    return this._langage;
  }

  public get Level() {
    return this._level;
  }

  public get YearOfExperience() {
    return this._yearOfExperence;
  }
  public get Description(){
    return this._description;
  }
  public get Evaluation(){
    return this._evaluation;
  }
}
