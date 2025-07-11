import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillEditor } from './skill-editor';

describe('SkillEditor', () => {
  let component: SkillEditor;
  let fixture: ComponentFixture<SkillEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
