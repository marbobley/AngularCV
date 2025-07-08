import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySkillList } from './category-skill-list';

describe('CategorySkillList', () => {
  let component: CategorySkillList;
  let fixture: ComponentFixture<CategorySkillList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorySkillList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorySkillList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
