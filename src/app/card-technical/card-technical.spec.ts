import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTechnical } from './card-technical';

describe('CardTechnical', () => {
  let component: CardTechnical;
  let fixture: ComponentFixture<CardTechnical>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTechnical]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTechnical);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
