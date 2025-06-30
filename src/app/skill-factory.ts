import { Injectable } from '@angular/core';
import { SkillModelBuilder } from './Classes/skill-model-builder';
import { SkillModel } from './Classes/skill-model';


@Injectable({
  providedIn: 'root',
})
export class SkillFactory {
  constructor() {}

  GetSkill(
    langage: string,
    level: number,
    yearOfExperience: string,
    description: string,
    evaluation: string
  ): SkillModel {
    const skill = new SkillModelBuilder()
      .setLangage(langage)
      .setLevel(level)
      .setYearOfExperience(yearOfExperience)
      .setDescription(description)
      .setEvaluation(evaluation)
      .build();

    return skill;
  }

  GetSkills(): SkillModel[] {
    const skillsOutput: SkillModel[] = [];

    skillsOutput.push(this.GetSkill('C#', 8 , 'Plus de 5', 'Description C#', 'Intermediaire/confirmé'));
    skillsOutput.push(this.GetSkill('Angular', 3.5 , 'Moins de 1', 'Description Angular', 'Débutant'));
    skillsOutput.push(this.GetSkill('SQL', 8 , 'Plus de 5', 'Description SQL', 'Intermediaire/confirmé'));
    skillsOutput.push(this.GetSkill('C', 4 , 'Moins de 2', 'Description SQL', 'Intermediaire/confirmé'));
    skillsOutput.push(this.GetSkill('C++', 4 , 'Moins de 2', 'Description SQL', 'Intermediaire/confirmé'));
    skillsOutput.push(this.GetSkill('Javascript', 3.5 , 'Moins de 1', 'Description Javascript', 'Débutant'));
    skillsOutput.push(this.GetSkill('TypeScript', 3.5 , 'Moins de 1', 'Description TypeScript', 'Débutant'));
    skillsOutput.push(this.GetSkill('HTML/CSS', 3.5  , 'Moins de 1', 'Description HTML/CSS', 'Débutant'));
    skillsOutput.push(this.GetSkill('PHP', 6 , 'Moins de 1', 'Description PHP', 'Intermediaire'));
    skillsOutput.push(this.GetSkill('Symfony', 6 , 'Moins de 1', 'Description Symfony', 'Intermediaire'));
    return skillsOutput;
  }
}
