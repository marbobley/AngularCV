import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsFilter } from './skills-filter';

describe('SkillsFilter', () => {
  let component: SkillsFilter;
  let fixture: ComponentFixture<SkillsFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
