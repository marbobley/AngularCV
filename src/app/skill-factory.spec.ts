import { TestBed } from '@angular/core/testing';

import { SkillFactory } from './skill-factory';

describe('SkillFactory', () => {
  let service: SkillFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
