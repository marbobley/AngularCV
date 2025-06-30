import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-technical',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './card-technical.html',
  styleUrl: './card-technical.css'
})
export class CardTechnical {
  title = 'hey';
  subtitle = 'heyho';
  content1 = 'aaaa';

}
