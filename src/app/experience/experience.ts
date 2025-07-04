import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LayoutService } from '../Services/layout-service';

@Component({
  selector: 'app-experience',
  imports: [NgClass],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  private layoutService = inject(LayoutService);
  isPhonePortrait = this.layoutService.isPhonePortrait;
}
