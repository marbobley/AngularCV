export class SkillModel {
  constructor(
    private _langage: string,
    private _level: number,
    private _yearOfExperence: string,
    private _description: string,
    private _evaluation: string
  ) {}

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
