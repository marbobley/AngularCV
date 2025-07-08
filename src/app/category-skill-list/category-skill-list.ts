import { Component, inject, OnInit, signal } from '@angular/core';
import { CategorySkillApiService } from '../Services/api/category-skill-api-service';
import { CategorySkillInterface } from '../Interface/CategorySkillInterface';
import { AuthenticateApiService } from '../Services/api/authenticate-api-service';
import { UserInterface } from '../Interface/UserInterface';

@Component({
  selector: 'app-category-skill-list',
  imports: [],
  templateUrl: './category-skill-list.html',
  styleUrl: './category-skill-list.css',
})
export class CategorySkillList implements OnInit {
  private categorySkillService = inject(CategorySkillApiService);
  private authenticateService = inject(AuthenticateApiService);

  categorySkills = signal<CategorySkillInterface[]>([]);

  ngOnInit(): void {
    this.categorySkillService.getCategorySkills().subscribe((res) => {
      this.categorySkills.set(res);
    });
  }

  getSkill() {
    this.categorySkillService.getCategorySkill(35).subscribe((res) => {
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

  authenticate() {

    const user: UserInterface = { 
      username: "user@skill.com",
      password: "password"
    }

    this.authenticateService.postLoginCheck(user).subscribe((res) => console.log(res));
  }
}
