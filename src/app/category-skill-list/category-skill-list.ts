import { Component, inject, OnInit, signal } from '@angular/core';
import { CategorySkillApiService } from '../Services/api/category-skill-api-service';
import { CategorySkillInterface } from '../Interface/CategorySkillInterface';

@Component({
  selector: 'app-category-skill-list',
  imports: [],
  templateUrl: './category-skill-list.html',
  styleUrl: './category-skill-list.css',
})
export class CategorySkillList implements OnInit {
  private categorySkillService = inject(CategorySkillApiService);
  categorySkills = signal<CategorySkillInterface[]>([]);


  ngOnInit(): void {
    this.categorySkillService.getCategorySkills().subscribe((res) => {
      this.categorySkills.set(res);
    });
  }
}
