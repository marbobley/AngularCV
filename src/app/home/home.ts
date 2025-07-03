import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgClass } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';
import { CardQuality } from "../card-quality/card-quality";
import { LayoutService } from '../Services/layout-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  imports: [MatGridListModule, RouterLink, NgClass,  CardQuality],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home  {
  private layoutService = inject(LayoutService);
  isPhonePortrait = this.layoutService.isPhonePortrait;
}
