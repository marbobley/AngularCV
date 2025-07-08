import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { SkillModel } from '../../Classes/skill-model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillDataService {
  url = 'datas/skills.json';
  urlApiSkill = 'http://127.0.0.1:8000/api/skills';
  urlApiCategorySkill = 'http://127.0.0.1:8000/api/categories';

  private skillsSignal = signal<SkillModel[]>([]);
  private http = inject(HttpClient);

  getSkills(): Observable<SkillModel[]> {
    return this.http
      .get<SkillModel[]>(this.url)
      .pipe(tap((skills) => this.skillsSignal.set(skills)));
  }

  
}
