import { Component } from '@angular/core';
import { CategorySkillList } from '../ComponentPages/category-skill-list/category-skill-list';
import { CategorySkillEditor } from "../ComponentPages/category-skill-editor/category-skill-editor";

@Component({
  selector: 'app-admin',
  imports: [CategorySkillList, CategorySkillEditor],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
}
