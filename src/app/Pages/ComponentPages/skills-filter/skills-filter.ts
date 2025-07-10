import { Component, input, output } from '@angular/core';
import { SkillInterface } from '../../../Interface/SkillInterface';

@Component({
  selector: 'app-skills-filter',
  imports: [],
  templateUrl: './skills-filter.html',
  styleUrl: './skills-filter.css',
})
export class SkillsFilter {
  skillFiltered = output<SkillInterface[]>();
  skills = input<SkillInterface[]>([]);
  skillTypeFiltering = input<string>('Framework');

  EmitNewListSkills() {
    this.skillFiltered.emit(this.filterBy());
  }

  filterBy(): SkillInterface[] {
    return this.skills().filter(
      (x) => x.categorySkill[0].name === this.skillTypeFiltering()
    );
  }
}
