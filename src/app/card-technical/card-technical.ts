import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-technical',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './card-technical.html',
  styleUrl: './card-technical.css'
})
export class CardTechnical {
  @Input() langage = 'C#';
  @Input() level = 9; 
  @Input() yearOfExperience = 5;
  @Input() description='Pratiquer dans un contexte TMA avec beaucoup de correctifs ';

}
