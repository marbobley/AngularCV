import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgClass } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [NgClass],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience implements OnInit  {
  isPhonePortrait = false;

  constructor(private responsive: BreakpointObserver)
  {

  }

  ngOnInit(): void {
    this.responsive.observe(Breakpoints.HandsetPortrait)
    .subscribe(result => {
      this.isPhonePortrait = false;

      if(result.matches)
      {
        this.isPhonePortrait = true;
      }
    })
  }

}
