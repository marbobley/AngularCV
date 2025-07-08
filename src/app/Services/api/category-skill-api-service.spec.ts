import { TestBed } from '@angular/core/testing';

import { CategorySkillApiService } from './category-skill-api-service';

describe('CategorySkillApiService', () => {
  let service: CategorySkillApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorySkillApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
