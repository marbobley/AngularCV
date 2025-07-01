import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@Component({
  selector: 'app-card-technical',
  imports: [MatButtonModule, MatCardModule,MatProgressBarModule],
  templateUrl: './card-technical.html',
  styleUrl: './card-technical.css'
})
export class CardTechnical {
  @Input() langage = 'C#';
  @Input() evalution = 'Intermediate';
  @Input() level = 9; 
  @Input() yearOfExperience = '5';
  @Input() description='Pratiquer dans un contexte TMA avec beaucoup de correctifs ';
  @Input() imgSrc = '';

}
