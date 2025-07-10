import { CategorySkillInterface } from "./CategorySkillInterface";

export interface SkillInterface {
  id?: number;
  language: string;
  level: number;
  yearOfExperience: string;
  description: string;
  evaluation: string;
  imgSource: string;
  categorySkill: CategorySkillInterface[];
}
