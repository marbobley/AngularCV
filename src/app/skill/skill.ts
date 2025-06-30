import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CardTechnical } from '../card-technical/card-technical';

@Component({
  selector: 'app-skill',
  imports: [NgClass,MatTabsModule, CardTechnical],
  templateUrl: './skill.html',
  styleUrl: './skill.css',
})
export class Skill implements OnInit {
  isPhonePortrait = false;

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit(): void {
    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe((result) => {
      this.isPhonePortrait = false;

      if (result.matches) {
        this.isPhonePortrait = true;
      }
    });
  }
}
