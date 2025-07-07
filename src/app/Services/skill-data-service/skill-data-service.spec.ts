import { TestBed } from '@angular/core/testing';

import { SkillDataService } from './skill-data-service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('SkillDataService', () => {
  let service: SkillDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
    })
    .compileComponents();
    service = TestBed.inject(SkillDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be truthy', () => { 
    const currentSkillOberserver = service.getSkills();
    expect(currentSkillOberserver).toBeTruthy();
  });
});
