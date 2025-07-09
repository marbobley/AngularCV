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

@Component({
  selector: 'app-skill',
  imports: [NgClass, MatTabsModule, CardSkill, SkillsFilter, SkillsSorter],
  templateUrl: './skill.html',
  styleUrl: './skill.css',
})
export class Skill implements OnInit {
  skills = signal<SkillModel[]>([]);
  skillsMemorized: SkillModel[] = [];
  private skillDataService = inject(SkillDataService);
  private layoutService = inject(LayoutService);
  isPhonePortrait = this.layoutService.isPhonePortrait;

  categorySkillApi = inject(CategorySkillApiService);
  categorySkills = signal<CategorySkillInterface[]>([]);

  ngOnInit(): void {
    this.skillDataService.getSkills().subscribe((res) => {
      this.skills.set(res);
      this.skillsMemorized = res;
    });

    this.categorySkillApi.getCategorySkills().subscribe(res => {
      this.categorySkills.set(res);
    });
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
}
