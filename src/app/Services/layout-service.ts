import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/***
 * To manager different kind of view screen laptop, portable ....
 */
export class LayoutService {
  private breakpointObserver = inject(BreakpointObserver);
  isPhonePortrait = toSignal(
    this.breakpointObserver
    .observe([Breakpoints.HandsetPortrait])
    .pipe(map(result => result.matches)),
    { initialValue: false}
  );
}
