import { Component, ElementRef, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  sideNav = viewChild<ElementRef<HTMLElement>>('sidenav');

  openSideMenu() {
    const elementSideNav = this.sideNav();
    if (!elementSideNav) return;

    elementSideNav.nativeElement.style.width = '250px';
  }

  closeSideMenu() {
    const elementSideNav = this.sideNav();
    if (!elementSideNav) return;

    elementSideNav.nativeElement.style.width = '0px';
  }
}
