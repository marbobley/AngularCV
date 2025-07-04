import { Component, DOCUMENT, inject, OnInit } from '@angular/core';
import { LayoutService } from '../Services/layout-service';
import { NgClass } from '@angular/common';
import { Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-test-breakpoint-observer',
  imports: [NgClass],
  templateUrl: './test-breakpoint-observer.html',
  styleUrl: './test-breakpoint-observer.css',
})
export class TestBreakpointObserver implements OnInit {
  private layoutService = inject(LayoutService);
  isPhonePortrait = this.layoutService.isPhonePortrait;
  private readonly document = inject(DOCUMENT);
  private readonly window = this.document?.defaultView;
  innerWidth: number = 0;
  innerHeight: number = 0;

  breakpoints = Breakpoints;

  ngOnInit(): void {
    this.initSize();
  }

  onClickRefresh() {
    this.initSize();
  }

  private initSize() {
    const currentWindow = this.window;
    if (currentWindow) {
      this.innerWidth = this.window?.innerWidth;
      this.innerHeight = this.window?.innerHeight;
    }
  }
}
