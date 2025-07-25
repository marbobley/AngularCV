import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Skill } from './skill';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

describe('Skill', () => {
  let component: Skill;
  let fixture: ComponentFixture<Skill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skill],
      providers: [provideRouter([]), provideHttpClient()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Skill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
