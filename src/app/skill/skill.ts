import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CardTechnical } from '../card-technical/card-technical';
import { SkillModel } from '../Classes/skill-model';
import { SkillModelBuilder } from '../Classes/skill-model-builder';
import { SkillFactory } from '../Services/skill-factory';

@Component({
  selector: 'app-skill',
  imports: [NgClass, MatTabsModule, CardTechnical],
  templateUrl: './skill.html',
  styleUrl: './skill.css',
})
export class Skill implements OnInit {
  isPhonePortrait = false;
  skills: SkillModel[] = [];

  constructor(
    private responsive: BreakpointObserver,
    private skillService: SkillFactory
  ) {}

  ngOnInit(): void {
    this.skills = this.skillService.GetSkills();
    this.skills = this.skillService.OrderSkillByLevelDesc(this.skills);

    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe((result) => {
      this.isPhonePortrait = false;

      if (result.matches) {
        this.isPhonePortrait = true;
      }
    });
  }

  sortByLevelDsc() {
    this.skills = this.skillService.GetSkills();
    this.skills = this.skillService.OrderSkillByLevelDesc(this.skills);
  }
  sortByLevelAsc() {
    this.skills = this.skillService.GetSkills();
    this.skills = this.skillService.OrderSkillByLevelAsc(this.skills);
  }

  filterByFramework() {
    this.skills = this.skillService.GetSkills();
    this.skills = this.skillService.FilterSkillByFramework(this.skills);
  }
  filterByLangage() {
    this.skills = this.skillService.GetSkills();
    this.skills = this.skillService.FilterSkillByLangage(this.skills);
  }
  filterByTool() {
    this.skills = this.skillService.GetSkills();
    this.skills = this.skillService.FilterSkillByTool(this.skills);
  }
}
