import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatGridListModule,RouterLink, NgClass],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

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
        console.log('HANDSETPORTRAIT');
      }
    })
  }

}
