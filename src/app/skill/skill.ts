import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CardTechnical } from '../card-technical/card-technical';
import { SkillModel } from '../Classes/skill-model';
import { SkillModelBuilder } from '../Classes/skill-model-builder';

@Component({
  selector: 'app-skill',
  imports: [NgClass, MatTabsModule, CardTechnical],
  templateUrl: './skill.html',
  styleUrl: './skill.css',
})
export class Skill implements OnInit {
  isPhonePortrait = false;
  skills: SkillModel[] = [];

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit(): void {
    const skill = new SkillModelBuilder()
      .setEvaluation('C#')
      .setLevel(8)
      .setYearOfExperience('Plus de 5')
      .setDescription('DESCPRTIOTOTOTOO')
      .setEvaluation('Intermediate')
      .build();


    this.skills.push(skill);

    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe((result) => {
      this.isPhonePortrait = false;

      if (result.matches) {
        this.isPhonePortrait = true;
      }
    });
  }
}
