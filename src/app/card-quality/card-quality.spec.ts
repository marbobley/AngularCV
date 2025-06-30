import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardQuality } from './card-quality';

describe('CardQuality', () => {
  let component: CardQuality;
  let fixture: ComponentFixture<CardQuality>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardQuality]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardQuality);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
