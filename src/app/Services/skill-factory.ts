import { Injectable } from '@angular/core';
import { SkillModelBuilder } from '../Classes/skill-model-builder';
import { SkillModel } from '../Classes/skill-model';

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
    evaluation: string,
    imgUrl: string
  ): SkillModel {
    const skill = new SkillModelBuilder()
      .setLangage(langage)
      .setLevel(level)
      .setYearOfExperience(yearOfExperience)
      .setDescription(description)
      .setEvaluation(evaluation)
      .setImgUrl(imgUrl)
      .build();

    return skill;
  }

  GetSkills(): SkillModel[] {
    const skillsOutput: SkillModel[] = [];

    skillsOutput.push(
      this.GetSkill(
        'C#',
        8,
        'Plus de 5',
        "Principalement dans un contexte TMA: beaucoup de correctifs et d'evolution",
        'Intermediaire/confirmé',
        'tech-icons/csharp.png'
      )
    );
    skillsOutput.push(
      this.GetSkill(
        'Angular',
        2,
        'Moins de 1',
        'Pas de pratique pro',
        'Débutant',
        'tech-icons/angular.png'
      )
    );
    skillsOutput.push(
      this.GetSkill(
        'SQL',
        8,
        'Plus de 5',
        'SQL Server, SQL Oracle, MySQL, MariaDB...',
        'Intermediaire/confirmé',
        'tech-icons/sqlserver.png'
      )
    );
    skillsOutput.push(
      this.GetSkill(
        'C',
        4,
        '5',
        'Langage utilisé pendant mes études',
        'Intermediaire',
        'tech-icons/C.png'
      )
    );
    skillsOutput.push(
      this.GetSkill(
        'C++',
        4,
        'Moins de 2',
        'Description SQL',
        'Intermediaire/confirmé',
        'tech-icons/Cplusplus.png'
      )
    );
    skillsOutput.push(
      this.GetSkill(
        'Javascript',
        3.5,
        'Moins de 1',
        'Description Javascript',
        'Débutant',
        ''
      )
    );
    skillsOutput.push(
      this.GetSkill(
        'TypeScript',
        3.5,
        'Moins de 1',
        'Description TypeScript',
        'Débutant',
        ''
      )
    );
    skillsOutput.push(
      this.GetSkill(
        'HTML/CSS',
        3.5,
        'Moins de 1',
        'Description HTML/CSS',
        'Débutant',
        ''
      )
    );
    skillsOutput.push(
      this.GetSkill(
        'PHP',
        5,
        'Moins de 1',
        'Description PHP',
        'Intermediaire',
        ''
      )
    );
    skillsOutput.push(
      this.GetSkill(
        'PHP/Symfony',
        4.5,
        'Moins de 1',
        'Description Symfony',
        'Intermediaire',
        ''
      )
    );
    return skillsOutput;
  }
}
