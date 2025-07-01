import { SkillModel } from './skill-model';

export class SkillModelBuilder {
  langage!: string;
  level!: number;
  yearOfExperience!: string;
  description!: string;
  evaluation!: string;
  imgUrl!: string;

  setImgUrl(imgUrl: string): SkillModelBuilder{
    this.imgUrl = imgUrl;
    return this;
  }

  setLangage(langage: string): SkillModelBuilder {
    this.langage = langage;
    return this;
  }

  setLevel(level: number): SkillModelBuilder {
    this.level = level;
    return this;
  }
  setYearOfExperience(year: string): SkillModelBuilder {
    this.yearOfExperience = year;
    return this;
  }

  setDescription(desc: string): SkillModelBuilder {
    this.description = desc;
    return this;
  }

  setEvaluation(evalu: string): SkillModelBuilder {
    this.evaluation = evalu;
    return this;
  }

  build(): SkillModel {
    return new SkillModel(this);
  }
}
