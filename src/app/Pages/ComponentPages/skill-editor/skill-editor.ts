import {
  Component,
  input,
  OnChanges,
  output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SkillInterface } from '../../../Interface/SkillInterface';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { CategorySkillInterface } from '../../../Interface/CategorySkillInterface';


@Component({
  selector: 'app-skill-editor',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule , MatInputModule],
  templateUrl: './skill-editor.html',
  styleUrl: './skill-editor.css',
})
export class SkillEditor implements OnChanges {
  skill = output<SkillInterface>();
  skillToUpdate = input<SkillInterface>();
  categorySkills = input<CategorySkillInterface[]>([{ name: 'abc' , description : 'def'}]);

  saveId: number | undefined = undefined;
  language = new FormControl('');
  description = new FormControl('');
  level = new FormControl('');
  yearOfExperience = new FormControl('');
  evaluation = new FormControl('');
  imgSource = new FormControl('');
  categorySkill = new FormControl('');

  ngOnChanges(changes: SimpleChanges): void {
    const currentValue = changes['skillToUpdate'].currentValue;
    this.language.setValue(currentValue['language']);
    this.description.setValue(currentValue['description']);
    this.level.setValue(currentValue['level']);
    this.yearOfExperience.setValue(currentValue['yearOfExperience']);
    this.evaluation.setValue(currentValue['evaluation']);
    this.imgSource.setValue(currentValue['imgSource']);
    //this.categorySkill.setValue(currentValue['categorySkill']);
    this.saveId = currentValue['id'];
  }
  sendSkill() {
    const curLang = this.language.value;
    const curDesc = this.description.value;
    const curLevel = this.level.value;
    const curYearOfExp = this.yearOfExperience.value;
    const curEval = this.evaluation.value;
    const curImg = this.imgSource.value;
   // const catSkill = this.categorySkill.value;


    if (this.skillToUpdate() === undefined) {
      if (curLang && curDesc) {
        const currentSkill: SkillInterface = {
          language: curLang,
          description: curDesc,
          level: curLevel ? Number(curLevel) : 0,
          yearOfExperience: curYearOfExp ? curYearOfExp : 'undefined',
          evaluation: curEval ? curEval : 'undefined',
          imgSource: curImg ? curImg : 'undefined',
          categorySkill: [],
        };

        this.skill.emit(currentSkill);
      }
    } else {
      const id = this.saveId;

      if (curLang && curDesc) {
        const currentSkill: SkillInterface = {
          id: id,
          language: curLang,
          description: curDesc,
          level: curLevel ? Number(curLevel) : 0,
          yearOfExperience: curYearOfExp ? curYearOfExp : 'undefined',
          evaluation: curEval ? curEval : 'undefined',
          imgSource: curImg ? curImg : 'undefined',
          categorySkill: [],
        };
        this.skill.emit(currentSkill);
      }
    }
  }
}
