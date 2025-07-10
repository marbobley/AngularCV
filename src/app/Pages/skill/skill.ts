import { NgClass } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CardSkill } from '../ComponentPages/card-skill/card-skill';
import { SkillModel } from '../../Classes/skill-model';
import { SkillDataService } from '../../Services/skill-data-service/skill-data-service';
import { SkillsFilter } from '../ComponentPages/skills-filter/skills-filter';
import { SkillsSorter } from '../ComponentPages/skills-sorter/skills-sorter';
import { LayoutService } from '../../Services/layout-service';
import { CategorySkillApiService } from '../../Services/api/category-skill-api-service';
import { CategorySkillInterface } from '../../Interface/CategorySkillInterface';
import { SkillApiService } from '../../Services/api/skill-api-service';
import { SkillInterface } from '../../Interface/SkillInterface';

@Component({
  selector: 'app-skill',
  imports: [NgClass, MatTabsModule, CardSkill, SkillsFilter, SkillsSorter],
  templateUrl: './skill.html',
  styleUrl: './skill.css',
})
export class Skill implements OnInit {
  private skillDataService = inject(SkillDataService);
  private layoutService = inject(LayoutService);
  isPhonePortrait = this.layoutService.isPhonePortrait;

  categorySkillApi = inject(CategorySkillApiService);
  categorySkills = signal<CategorySkillInterface[]>([]);

  skillApi = inject(SkillApiService);
  skills = signal<SkillInterface[]>([]);
  skillsMemorized: SkillInterface[] = [];

  ngOnInit(): void {

    this.categorySkillApi.getCategorySkills().subscribe(res => {
      this.categorySkills.set(res);
    });

    this.skillApi.getSkills().subscribe(res => {
      this.skills.set(res);
      this.skillsMemorized = res;
    })

  }
  reset() {
    this.skills.set(this.skillsMemorized);
  }

  handleSkillFiltered($event: SkillInterface[]) {
    this.skills.set($event);
  }

  handleSkillSorted($event: SkillInterface[]) {
    this.skills.set($event);
  }
}
