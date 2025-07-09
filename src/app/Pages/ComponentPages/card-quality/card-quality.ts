import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-quality',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './card-quality.html',
  styleUrl: './card-quality.css',
})
export class CardQuality {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() content1 =
    'J’ai souvent travaillé sur des projets de petites tailles : Satisfait des résultats et d’un compte rendu d’activité régulier, mes responsables m’ont laissé gérer le projet de façon autonome.';
  @Input() content2 =
    'Cette autonomie m’a permis de monter en compétences sur la gestion du temps, la planification et le relationnelle client.';

    @Input() imgSrc = '';
}
