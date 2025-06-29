import { Component, ElementRef, inject, OnInit, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LayoutModule, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {

  private breakpointObserver = inject(BreakpointObserver);
  
  isDesktop$ = this.breakpointObserver
    .observe([Breakpoints.Tablet, Breakpoints.Large, Breakpoints.XLarge])
    .pipe(map(result => result.matches));
  sideNav = viewChild<ElementRef<HTMLElement>>('sidenav');

  openSideMenu() {
    const elementSideNav = this.sideNav();
    if (!elementSideNav)
      return;

    elementSideNav.nativeElement.style.width = "250px";

  }


  closeSideMenu() {
    const elementSideNav = this.sideNav();
    if (!elementSideNav)
      return;

    elementSideNav.nativeElement.style.width = "0px";

  }
}
