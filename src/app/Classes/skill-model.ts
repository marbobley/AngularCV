import { SkillModelBuilder } from "./skill-model-builder";

export class SkillModel {
    private _typeSkill: string;
    private _langage: string ;
    private _level: number;
    private _yearOfExperence: string;
    private _description: string;
    private _evaluation: string;
    private _imgSrc: string;

    constructor(builder: SkillModelBuilder)
    {
        this._typeSkill = builder.typeSkill;
        this._langage = builder.langage;
        this._level = builder.level;
        this._yearOfExperence = builder.yearOfExperience;
        this._description = builder.description;
        this._evaluation = builder.evaluation;
        this._imgSrc = builder.imgUrl;
    }

  public get TypeSkill(){
    return this._typeSkill;
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

  public get ImgSrc(){
    return this._imgSrc;
  }
}
