import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySkillEditor } from './category-skill-editor';

describe('CategorySkillEditor', () => {
  let component: CategorySkillEditor;
  let fixture: ComponentFixture<CategorySkillEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorySkillEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorySkillEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
