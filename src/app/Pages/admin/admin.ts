import { Component } from '@angular/core';
import { CategorySkillList } from "../../category-skill-list/category-skill-list";

@Component({
  selector: 'app-admin',
  imports: [CategorySkillList],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

}
