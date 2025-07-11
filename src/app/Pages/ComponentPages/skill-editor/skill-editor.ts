import { Component, input, OnChanges, output, SimpleChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SkillInterface } from '../../../Interface/SkillInterface';

@Component({
  selector: 'app-skill-editor',
  imports: [ReactiveFormsModule],
  templateUrl: './skill-editor.html',
  styleUrl: './skill-editor.css'
})
export class SkillEditor implements OnChanges {
  skill = output<SkillInterface>();
  skillToUpdate = input<SkillInterface>();

  saveId: number | undefined = undefined;
  language = new FormControl('');
  description = new FormControl('');

  ngOnChanges(changes: SimpleChanges): void {
    const currentValue = changes['skillToUpdate'].currentValue;
    this.language.setValue(currentValue['language']);
    this.description.setValue(currentValue['description']);
    this.saveId = currentValue['id'];
  }
  sendSkill() {
    if (this.skillToUpdate() === undefined) {
      const curLang = this.language.value;
      const curDesc = this.description.value;

      if (curLang && curDesc) {
        const currentSkill: SkillInterface = {
          language: curLang,
          description: curDesc,
          level: 0,
          yearOfExperience: '',
          evaluation: '',
          imgSource: '',
          categorySkill: []
        };

        this.skill.emit(currentSkill);
      }
    } else {
      const curLang = this.language.value;
      const curDesc = this.description.value;
      const id = this.saveId;

      if (curLang && curDesc) {
        const currentSkill: SkillInterface = {
          id: id,
          language: curLang,
          description: curDesc,
          level: 0,
          yearOfExperience: '',
          evaluation: '',
          imgSource: '',
          categorySkill: []
        };
        this.skill.emit(currentSkill);
      }
    }
  }
}
