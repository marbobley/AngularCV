import { Component, inject, OnInit, signal } from '@angular/core';
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
export class Admin implements OnInit {
  private categorySkillApi = inject(CategorySkillApiService);
  categorySkills = signal<CategorySkillInterface[]>([]);

  catSkillToUpdate = signal<CategorySkillInterface | undefined>(undefined);

  ngOnInit(): void {
    this.categorySkillApi.getCategorySkills().subscribe((res) => {
      this.categorySkills.set(res);
    });
  }

  categorySkillToPost($event: CategorySkillInterface) {
    this.categorySkillApi.postCategorySkill($event).subscribe(() => {
      this.categorySkillApi.getCategorySkills().subscribe((res) => {
        this.categorySkills.set(res);
      });
    });
  }

  categorySkillToDelete($event: number) {
    this.categorySkillApi.deleteCategorySkill($event).subscribe(() =>
      this.categorySkillApi.getCategorySkills().subscribe((res) => {
        this.categorySkills.set(res);
      })
    );
  }

  categorySkillToUpdate($event: CategorySkillInterface) {
    console.log($event);
    this.catSkillToUpdate.set($event);
  }
}
