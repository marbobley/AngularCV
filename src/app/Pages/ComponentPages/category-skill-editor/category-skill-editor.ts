import {  Component, input, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CategorySkillInterface } from '../../../Interface/CategorySkillInterface';

@Component({
  selector: 'app-category-skill-editor',
  imports: [ReactiveFormsModule],
  templateUrl: './category-skill-editor.html',
  styleUrl: './category-skill-editor.css',
})
export class CategorySkillEditor  {
  categorySkill = output<CategorySkillInterface>();
  categorySkillToUpdate = input<CategorySkillInterface>();

  name = new FormControl('');
  description = new FormControl('');


  sendCategorySkill() {
    console.log(this.categorySkillToUpdate());
    if (this.categorySkillToUpdate() === undefined) {
      const curName = this.name.value;
      const curDesc = this.description.value;

      if (curName && curDesc) {
        const currentCategorySkill: CategorySkillInterface = {
          name: curName,
          description: curDesc,
        };

        this.categorySkill.emit(currentCategorySkill);
      }
    }
  }
}
