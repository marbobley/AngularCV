import { Component, inject, OnInit, signal } from '@angular/core';
import { CategorySkillApiService } from '../Services/api/category-skill-api-service';
import { CategorySkillInterface } from '../Interface/CategorySkillInterface';
import { AuthenticateApiService } from '../Services/api/authenticate-api-service';

@Component({
  selector: 'app-category-skill-list',
  imports: [],
  templateUrl: './category-skill-list.html',
  styleUrl: './category-skill-list.css',
})
export class CategorySkillList implements OnInit {
  private categorySkillService = inject(CategorySkillApiService);
  authenticateService = inject(AuthenticateApiService);
  isConnected = this.authenticateService.isConnected;

  categorySkills = signal<CategorySkillInterface[]>([]);

  ngOnInit(): void {
    if (this.isConnected()) {
      this.categorySkillService.getCategorySkills().subscribe((res) => {
        this.categorySkills.set(res);
      });
    }
    else
    {
      console.log('not connected');
    }
  }

  getSkills() {
    this.categorySkillService.getCategorySkills().subscribe((res) => {
      console.log(res);
    });
  }

  postCategorySkill() {
    const categorySkill: CategorySkillInterface = {
      name: 'A1',
      description: 'B1',
    };

    this.categorySkillService
      .postCategorySkill(categorySkill)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
