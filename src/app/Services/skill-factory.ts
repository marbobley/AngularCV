import { Injectable } from '@angular/core';
import { SkillModelBuilder } from '../Classes/skill-model-builder';
import { SkillModel } from '../Classes/skill-model';

@Injectable({
  providedIn: 'root',
})
/**
 * To generate skills based on pattern builder
 */
export class SkillFactory {

  GetSkill(
    langage: string,
    level: number,
    yearOfExperience: string,
    description: string,
    evaluation: string,
    imgUrl: string,
    typeSkill: string
  ): SkillModel {
    const skill = new SkillModelBuilder()
      .setLangage(langage)
      .setLevel(level)
      .setYearOfExperience(yearOfExperience)
      .setDescription(description)
      .setEvaluation(evaluation)
      .setImgUrl(imgUrl)
      .setTypeSkill(typeSkill)
      .build();

    return skill;
  }

  OrderSkillByLevelDesc( skills: SkillModel[]) : SkillModel[]
  {
    return skills.sort((elm1, elm2) =>  elm2.Level - elm1.Level);
  }
  OrderSkillByLevelAsc( skills: SkillModel[]) : SkillModel[]
  {
    return skills.sort((elm1, elm2) =>  elm1.Level - elm2.Level);
  }
  
  FilterSkillByFramework(skills: SkillModel[]): SkillModel[] {
    return skills.filter((elm) => elm.TypeSkill === 'Framework')
  }
  FilterSkillByTool(skills: SkillModel[]): SkillModel[] {
    return skills.filter((elm) => elm.TypeSkill === 'Outil')
  }
  FilterSkillByLangage(skills: SkillModel[]): SkillModel[] {
    return skills.filter((elm) => elm.TypeSkill === 'Langage')
  }

  GetSkills(): SkillModel[] {
    const skillsOutput: SkillModel[] = [];
    /*
    0 - 1 - 2 : Débutant 
    3 - 4 - 5 : Intermédiaire
    6 - 7 - 8 : Confirmé 
    9 - 10 : Expert
    */

    skillsOutput.push(
      this.GetSkill(
        'C#',
        7,
        'Plus de 5',
        "Principalement dans un contexte TMA: beaucoup de correctifs et d'evolution",
        'Confirmé',
        'tech-icons/csharp.png',
        'Langage'
      )
    );
    skillsOutput.push(
      this.GetSkill(
        'Angular',
        2,
        'Moins de 1',
        'Pas de pratique pro: ce site est une mise en pratique de mes connaissances Angular',
        'Débutant',
        'tech-icons/angular.png',
        'Framework'
      )
    );
    skillsOutput.push(
      this.GetSkill(
        'SQL',
        8,
        'Plus de 8',
        'SQL Server, SQL Oracle, MySQL, MariaDB...',
        'Confirmé',
        'tech-icons/sqlserver.png',
        'Langage'
      )
    );
    skillsOutput.push(
      this.GetSkill(
        'C',
        3,
        '5',
        'Langage utilisé pendant mes études',
        'Intermédiaire',
        'tech-icons/C.png',
        'Langage'
      )
    );
    skillsOutput.push(
      this.GetSkill(
        'C++',
        3,
        'Moins de 2',
        'Langage utilisé pendant mes études et quelques mois pro',
        'Intermédiaire',
        'tech-icons/Cplusplus.png',
        'Langage'
      )
    );
    skillsOutput.push(
      this.GetSkill(
        'Javascript',
        3.5,
        '1 à 2',
        'Pratiqué dans un contexte Sharepoint',
        'Intermédiaire',
        'tech-icons/Javascript.png',
        'Langage'
      )
    );
    skillsOutput.push(
      this.GetSkill(
        'TypeScript',
        3.5,
        'Moins de 1',
        'En cours de formation: ce site est une mise en pratique du TS.',
        'Intermédiaire',
        'tech-icons/Typescript.png',
        'Langage'
      )
    );
    skillsOutput.push(
      this.GetSkill(
        'HTML/CSS',
        3.5,
        'Moins de 1',
        'En cours de formation: ce site est une mise en pratique du HTML/CSS.',
        'Intermédiaire',
        'tech-icons/html5.png',
        'Langage'
      )
    );
    skillsOutput.push(
      this.GetSkill(
        'PHP',
        4,
        'Moins de 1',
        'Pas de pratique pro mais des bases',
        'Intermédiaire',
        'tech-icons/Php.png',
        'Langage'
      )
    );
    skillsOutput.push(
      this.GetSkill(
        'PHP/Symfony',
        3.5,
        'Moins de 1',
        'Pas de pratique pro mais des bases : création d\'un site de gestion de compte, création de jeux type UnLock ou Exit en ligne',
        'Intermédiaire',
        'tech-icons/symfony.jpg',
        'Framework'
      )
    );
    skillsOutput.push(
      this.GetSkill(
        'Composer',
        4.5,
        'Moins de 1',
        'Pas de pratique pro mais utiliser pour Symfony',
        'Intermédiaire',
        'tech-icons/composer.png',
        'Outil'
      )
    );
    skillsOutput.push(
      this.GetSkill(
        'npm',
        4.5,
        'Moins de 1',
        'En cours de formation',
        'Intermediaire',
        'tech-icons/npm.png',
        'Outil'
      )
    );
    skillsOutput.push(
      this.GetSkill(
        'dotnet',
        4.5,
        'Moins de 1',
        'En cours de formation',
        'Intermediaire',
        '',
        'Outil'
      )
    );
    skillsOutput.push(
      this.GetSkill(
        'git',
        6,
        'Moins de 1',
        'Utiliser plusieurs fois sur des projets perso ou pro',
        'Confirmé',
        '',
        'Outil'
      )
    );
    return skillsOutput;
  }
}
