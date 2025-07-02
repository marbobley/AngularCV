import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgClass } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CardSkill } from '../card-skill/card-skill';
import { SkillModel } from '../Classes/skill-model';
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
  skillsMemorized: SkillModel[] = [];

  constructor(
    private responsive: BreakpointObserver,
    private skillDataService: SkillDataService
  ) {}

  ngOnInit(): void {
    this.skillDataService.getSkills().subscribe((res) => {
      this.skills.set(res);
      this.skillsMemorized  = res;
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



  filterByFramework() {
    this.skills.set(this.skillsMemorized);
    this.skills.set(this.skills().filter((x) => x.TypeSkill === 'Framework'));
  }
  filterByLangage() {
    this.skills.set(this.skillsMemorized);
    this.skills.set(this.skills().filter((x) => x.TypeSkill === 'Langage'));
  }
  filterByTool() {
    this.skills.set(this.skillsMemorized);
    this.skills.set(this.skills().filter((x) => x.TypeSkill === 'Outil'));
  }
  reset() {
    this.skills.set(this.skillsMemorized);
  }
}
