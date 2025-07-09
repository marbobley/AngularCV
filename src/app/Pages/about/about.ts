import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LayoutService } from '../Services/layout-service';

@Component({
  selector: 'app-about',
  imports: [NgClass],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  private layoutService = inject(LayoutService);
  isPhonePortrait = this.layoutService.isPhonePortrait;
}
