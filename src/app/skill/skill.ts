import { NgClass } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CardSkill } from '../card-skill/card-skill';
import { SkillModel } from '../Classes/skill-model';
import { SkillDataService } from '../Services/skill-data-service';
import { TypeSkillEnum } from '../Enum/TypeSkillEnum';
import { SkillsFilter } from '../skills-filter/skills-filter';
import { SkillsSorter } from '../skills-sorter/skills-sorter';
import { LayoutService } from '../Services/layout-service';

@Component({
  selector: 'app-skill',
  imports: [NgClass, MatTabsModule, CardSkill, SkillsFilter, SkillsSorter],
  templateUrl: './skill.html',
  styleUrl: './skill.css',
})
export class Skill implements OnInit {
  skills = signal<SkillModel[]>([]);
  skillsMemorized: SkillModel[] = [];
  protected SkillTypeEnum = TypeSkillEnum;
  private skillDataService = inject(SkillDataService);
  private layoutService = inject(LayoutService);
  isPhonePortrait = this.layoutService.isPhonePortrait;

  ngOnInit(): void {
    this.skillDataService.getSkills().subscribe((res) => {
      this.skills.set(res);
      this.skillsMemorized = res;
    });

    this.GetSkillType();
  }
  reset() {
    this.skills.set(this.skillsMemorized);
  }

  handleSkillFiltered($event: SkillModel[]) {
    this.skills.set($event);
  }

  handleSkillSorted($event: SkillModel[]) {
    this.skills.set($event);
  }

  GetSkillType(): string[] {
    const output: string[] = [];

    for (const item in TypeSkillEnum) {
      output.push(item);
    }

    return output;
  }
}
