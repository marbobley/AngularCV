import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBreakpointObserver } from './test-breakpoint-observer';

describe('TestBreakpointObserver', () => {
  let component: TestBreakpointObserver;
  let fixture: ComponentFixture<TestBreakpointObserver>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestBreakpointObserver]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestBreakpointObserver);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
