import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [NgClass],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit{
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
