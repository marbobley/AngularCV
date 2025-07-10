import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MultiplyByXPipe } from '../../../Pipes/MultiplyByXPipe';
import { SkillInterface } from '../../../Interface/SkillInterface';

@Component({
  selector: 'app-card-skill',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatTooltipModule,
    MultiplyByXPipe,
  ],
  templateUrl: './card-skill.html',
  styleUrl: './card-skill.css',
})
export class CardSkill {
  skill = input<SkillInterface>();

  getSkillCategory() {
    const catSkill = this.skill()?.categorySkill;
    if(catSkill)
      return catSkill[0].name;

    return 'undefined';
  }
}
