import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgClass } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnInit,
  viewChild,
} from '@angular/core';
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
