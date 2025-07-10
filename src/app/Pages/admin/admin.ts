import { Component, inject } from '@angular/core';
import { CategorySkillList } from '../ComponentPages/category-skill-list/category-skill-list';
import { CategorySkillEditor } from '../ComponentPages/category-skill-editor/category-skill-editor';
import { CategorySkillInterface } from '../../Interface/CategorySkillInterface';
import { CategorySkillApiService } from '../../Services/api/category-skill-api-service';

@Component({
  selector: 'app-admin',
  imports: [CategorySkillList, CategorySkillEditor],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {

  private categorySkillApi = inject(CategorySkillApiService);

  categorySkill: CategorySkillInterface | null = null;

  categorySkillEmit($event: CategorySkillInterface) {

    this.categorySkillApi.postCategorySkill($event).subscribe();
    
  }
}
