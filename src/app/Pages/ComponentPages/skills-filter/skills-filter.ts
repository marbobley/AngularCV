import { Component, input, output } from '@angular/core';
import { SkillModel } from '../../../Classes/skill-model';

@Component({
  selector: 'app-skills-filter',
  imports: [],
  templateUrl: './skills-filter.html',
  styleUrl: './skills-filter.css',
})
export class SkillsFilter {
  skillFiltered = output<SkillModel[]>();
  skills = input<SkillModel[]>([]);
  skillTypeFiltering = input<string>('Framework');

  EmitNewListSkills() {
    this.skillFiltered.emit(this.filterBy());
  }

  filterBy(): SkillModel[] {
    return this.skills().filter(
      (x) => x.TypeSkill === this.skillTypeFiltering()
    );
  }
}
