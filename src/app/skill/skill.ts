import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgClass } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CardSkill } from '../card-skill/card-skill';
import { SkillModel } from '../Classes/skill-model';
import { SkillDataService } from '../Services/skill-data-service';
import { TypeSkillEnum } from '../Enum/TypeSkillEnum';
import { SkillsFilter } from '../skills-filter/skills-filter';

@Component({
  selector: 'app-skill',
  imports: [NgClass, MatTabsModule, CardSkill, SkillsFilter],
  templateUrl: './skill.html',
  styleUrl: './skill.css',
})
export class Skill implements OnInit {
  isPhonePortrait = false;
  skills = signal<SkillModel[]>([]);
  skillsMemorized: SkillModel[] = [];

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
  }

  sortByLevelDsc() {
    this.skills().sort((a, b) => b.Level - a.Level);
  }
  sortByLevelAsc() {
    this.skills().sort((a, b) => a.Level - b.Level);
  }
  reset() {
    this.skills.set(this.skillsMemorized);
  }

  handleSkillFiltered($event: SkillModel[]) {
    this.skills.set($event);
  }
}
