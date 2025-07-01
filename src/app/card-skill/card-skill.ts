import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

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
  @Input() typeSkill = 'Langage';
  @Input() langage = 'C#';
  @Input() evalution = 'Intermediate';
  @Input() level = 9;
  @Input() yearOfExperience = '5';
  @Input() description =
    'Pratiquer dans un contexte TMA avec beaucoup de correctifs ';
  @Input() imgSrc = '';
}
