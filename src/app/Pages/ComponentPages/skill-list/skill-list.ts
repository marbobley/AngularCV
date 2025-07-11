import { Component, input, output } from '@angular/core';
import { SkillInterface } from '../../../Interface/SkillInterface';

@Component({
  selector: 'app-skill-list',
  imports: [],
  templateUrl: './skill-list.html',
  styleUrl: './skill-list.css'
})
export class SkillList {
  skillsInput = input<SkillInterface[]>([]);
  skillIdToDelete = output<number>();
  skillToUpdate = output<SkillInterface>();

  emitDeleteSkill(idSkill: number | undefined) {
    if (idSkill !== undefined)
      this.skillIdToDelete.emit(idSkill);
  }

  emitUpdateSkill(skill: SkillInterface | undefined){
    if(skill !== undefined)
      this.skillToUpdate.emit(skill);
  }

}
