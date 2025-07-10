import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-skill-editor',
  imports: [ReactiveFormsModule],
  templateUrl: './category-skill-editor.html',
  styleUrl: './category-skill-editor.css'
})
export class CategorySkillEditor {
  categorySkillForm = new FormControl('');

}
