import { Component, input, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SkillModel } from '../Classes/skill-model';

@Component({
  selector: 'app-card-skill',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatTooltipModule,
  ],
  templateUrl: './card-skill.html',
  styleUrl: './card-skill.css',
})
export class CardSkill {
  skill = input<SkillModel>();
}
