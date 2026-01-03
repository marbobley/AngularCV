import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LayoutService } from '../../../Services/layout-service';
import { NgClass } from '@angular/common';
import { AuthenticateApiService } from '../../../Services/api/authenticate-api-service';
import { TokenService } from '../../../Services/api/token-service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, NgClass],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  sideNav = viewChild<ElementRef<HTMLElement>>('sidenav');
  responsive = inject(LayoutService);
  isPhonePortrait = this.responsive.isPhonePortrait;
  authenticateService = inject(AuthenticateApiService);
  tokenService = inject(TokenService);
  clipboard = inject(Clipboard);
  isConnected = this.authenticateService.isConnected;
  isAuthorized = this.tokenService.isAdmin;
  isExpired = this.tokenService.isExpired;

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

  copyToClipboard(text: string) {
    this.clipboard.copy(text);
  }
}
