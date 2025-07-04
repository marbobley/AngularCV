import { Component, input, output } from '@angular/core';
import { SkillModel } from '../Classes/skill-model';

@Component({
  selector: 'app-skills-sorter',
  imports: [],
  templateUrl: './skills-sorter.html',
  styleUrl: './skills-sorter.css',
})
export class SkillsSorter {
  skillSorted = output<SkillModel[]>();
  skills = input<SkillModel[]>([]);

  isSortAsc = true;

  EmitNewListSkills() {
    if (this.isSortAsc) {
      this.skillSorted.emit(this.sortByLevelAsc());
    } else {
      this.skillSorted.emit(this.sortByLevelDsc());
    }
    
      this.isSortAsc = !this.isSortAsc;
  }

  sortByLevelDsc(): SkillModel[] {
    return this.skills().sort((a, b) => b.Level - a.Level);
  }
  sortByLevelAsc() {
    return this.skills().sort((a, b) => a.Level - b.Level);
  }
}
