import { Component, input, output } from '@angular/core';
import { CategorySkillInterface } from '../../../Interface/CategorySkillInterface';

@Component({
  selector: 'app-category-skill-list',
  imports: [],
  templateUrl: './category-skill-list.html',
  styleUrl: './category-skill-list.css',
})
export class CategorySkillList {
  categorySkillsInput = input<CategorySkillInterface[]>([]);
  categorySkillIdToDelete = output<number>();

  deleteCategorySkill(idCategorySkill: number | undefined) {
    if (idCategorySkill !== undefined)
      this.categorySkillIdToDelete.emit(idCategorySkill);
  }
}
