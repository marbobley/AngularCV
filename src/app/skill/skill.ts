import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgClass } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CardSkill } from '../card-skill/card-skill';
import { SkillModel } from '../Classes/skill-model';
import { SkillModelBuilder } from '../Classes/skill-model-builder';
import { SkillFactory } from '../Services/skill-factory';
import { SkillDataService } from '../Services/skill-data-service';

@Component({
  selector: 'app-skill',
  imports: [NgClass, MatTabsModule, CardSkill],
  templateUrl: './skill.html',
  styleUrl: './skill.css',
})
export class Skill implements OnInit {
  isPhonePortrait = false;
  skills = signal<SkillModel[]>([]);

  constructor(
    private responsive: BreakpointObserver,
    private skillDataService: SkillDataService
  ) {}

  ngOnInit(): void {
    this.skillDataService.getSkills().subscribe((res) => {
      this.skills.set(res);
    });

    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe((result) => {
      this.isPhonePortrait = false;

      if (result.matches) {
        this.isPhonePortrait = true;
      }
    });
  }
}
