import { Component, inject, OnInit, signal } from '@angular/core';
import { CategorySkillList } from '../ComponentPages/category-skill-list/category-skill-list';
import { CategorySkillEditor } from '../ComponentPages/category-skill-editor/category-skill-editor';
import { CategorySkillInterface } from '../../Interface/CategorySkillInterface';
import { CategorySkillApiService } from '../../Services/api/category-skill-api-service';
import { SkillList } from '../ComponentPages/skill-list/skill-list';
import { SkillInterface } from '../../Interface/SkillInterface';
import { SkillApiService } from '../../Services/api/skill-api-service';
import { SkillEditor } from '../ComponentPages/skill-editor/skill-editor';

@Component({
  selector: 'app-admin',
  imports: [CategorySkillList, CategorySkillEditor, SkillList, SkillEditor],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit {
  private categorySkillApi = inject(CategorySkillApiService);
  private skillApi = inject(SkillApiService);
  categorySkills = signal<CategorySkillInterface[]>([]);
  skills = signal<SkillInterface[]>([]);

  catSkillToUpdate = signal<CategorySkillInterface | undefined>(undefined);
  skillInterfaceToUpdate = signal<SkillInterface | undefined>(undefined);

  ngOnInit(): void {
    this.categorySkillApi.getCategorySkills().subscribe((res) => {
      this.categorySkills.set(res);
    });

    this.skillApi.getSkills().subscribe((res) => {
      this.skills.set(res);
    });
  }

  categorySkillToPost($event: CategorySkillInterface) {
    this.categorySkillApi.postCategorySkill($event).subscribe(() => {
      this.categorySkillApi.getCategorySkills().subscribe((res) => {
        this.categorySkills.set(res);
      });
    });
  }

  skillToPost($event: SkillInterface) {
    this.skillApi.postSkill($event).subscribe(() => {
      this.skillApi.getSkills().subscribe((res) => {
        this.skills.set(res);
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

  categorySkillToPut($event: CategorySkillInterface) {
    this.categorySkillApi.putCategorySkill($event).subscribe(() =>
      this.categorySkillApi.getCategorySkills().subscribe((res) => {
        this.categorySkills.set(res);
      })
    );
  }
  
  skillToPut($event: SkillInterface) {
    console.log($event);
    this.skillApi.putSkill($event).subscribe(() =>
      this.skillApi.getSkills().subscribe((res) => {
        this.skills.set(res);
      })
    );
  }

  categorySkillToUpdate($event: CategorySkillInterface) {
    this.catSkillToUpdate.set($event);
  }

  skillToUpdate($event: SkillInterface) {
    this.skillInterfaceToUpdate.set($event);
  }
  skillToDelete($event: number) {
    this.skillApi.deleteSkill($event).subscribe(() =>
      this.skillApi.getSkills().subscribe((res) => {
        this.skills.set(res);
      })
    );
  }
}
