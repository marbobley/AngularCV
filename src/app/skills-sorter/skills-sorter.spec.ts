import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsSorter } from './skills-sorter';

describe('SkillsSorter', () => {
  let component: SkillsSorter;
  let fixture: ComponentFixture<SkillsSorter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsSorter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsSorter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
