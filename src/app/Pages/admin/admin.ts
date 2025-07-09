import { Component, inject } from '@angular/core';
import { CategorySkillList } from '../ComponentPages/category-skill-list/category-skill-list';
import { SkillApiService } from '../../Services/api/skill-api-service';

@Component({
  selector: 'app-admin',
  imports: [CategorySkillList],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  private skillApi = inject(SkillApiService);
  showSkillsApi() {
    this.skillApi.getSkills().subscribe( res => console.log(res));
  }
}
