import {
  Component,
  input,
  OnChanges,
  output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CategorySkillInterface } from '../../../Interface/CategorySkillInterface';

@Component({
  selector: 'app-category-skill-editor',
  imports: [ReactiveFormsModule],
  templateUrl: './category-skill-editor.html',
  styleUrl: './category-skill-editor.css',
})
export class CategorySkillEditor implements OnChanges {
  categorySkill = output<CategorySkillInterface>();
  categorySkillToUpdate = input<CategorySkillInterface>();

  saveId: number | undefined = undefined;
  name = new FormControl('');
  description = new FormControl('');

  ngOnChanges(changes: SimpleChanges): void {
    const currentValue = changes['categorySkillToUpdate'].currentValue;
    this.name.setValue(currentValue['name']);
    this.description.setValue(currentValue['description']);
    this.saveId = currentValue['id'];
  }

  sendCategorySkill() {
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
    } else {
      const curName = this.name.value;
      const curDesc = this.description.value;
      const id = this.saveId;

      if (curName && curDesc) {
        const currentCategorySkill: CategorySkillInterface = {
          id: id,
          name: curName,
          description: curDesc,
        };
        this.categorySkill.emit(currentCategorySkill);
      }
    }
  }
}
