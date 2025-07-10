import { Component, input, output } from '@angular/core';
import { SkillInterface } from '../../../Interface/SkillInterface';

@Component({
  selector: 'app-skills-sorter',
  imports: [],
  templateUrl: './skills-sorter.html',
  styleUrl: './skills-sorter.css',
})
export class SkillsSorter {
  skillSorted = output<SkillInterface[]>();
  skills = input<SkillInterface[]>([]);

  isSortAsc = true;

  EmitNewListSkills() {
    if (this.isSortAsc) {
      this.skillSorted.emit(this.sortByLevelAsc());
    } else {
      this.skillSorted.emit(this.sortByLevelDsc());
    }
    
      this.isSortAsc = !this.isSortAsc;
  }

  sortByLevelDsc(): SkillInterface[] {
    return this.skills().sort((a, b) => b.level - a.level);
  }
  sortByLevelAsc() {
    return this.skills().sort((a, b) => a.level - b.level);
  }
}
