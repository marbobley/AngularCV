import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgClass } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CardSkill } from '../card-skill/card-skill';
import { SkillModel } from '../Classes/skill-model';
import { SkillDataService } from '../Services/skill-data-service';
import { TypeSkillEnum } from '../Enum/TypeSkillEnum';
import { SkillsFilter } from '../skills-filter/skills-filter';
import { SkillsSorter } from '../skills-sorter/skills-sorter';

@Component({
  selector: 'app-skill',
  imports: [NgClass, MatTabsModule, CardSkill, SkillsFilter, SkillsSorter],
  templateUrl: './skill.html',
  styleUrl: './skill.css',
})
export class Skill implements OnInit {
  skills = signal<SkillModel[]>([]);
  skillsMemorized: SkillModel[] = [];
  isPhonePortrait = false;
  protected SkillTypeEnum = TypeSkillEnum;

  constructor(
    private responsive: BreakpointObserver,
    private skillDataService: SkillDataService
  ) {}

  ngOnInit(): void {
    this.skillDataService.getSkills().subscribe((res) => {
      this.skills.set(res);
      this.skillsMemorized = res;
    });

    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe((result) => {
      this.isPhonePortrait = false;

      if (result.matches) {
        this.isPhonePortrait = true;
      }
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

  GetSkillType() : string[] {
    let output: string[] = [];

    for(let item in TypeSkillEnum)
    {
      output.push(item);
    }

    return output;
  }
}
