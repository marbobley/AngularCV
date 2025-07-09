import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComwayGame } from './comway-game';

describe('ComwayGame', () => {
  let component: ComwayGame;
  let fixture: ComponentFixture<ComwayGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComwayGame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComwayGame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
