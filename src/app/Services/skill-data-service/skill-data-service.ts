import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { SkillModel } from '../../Classes/skill-model';
import { Observable, tap } from 'rxjs';
import { CategorySkillInterface } from '../../Interface/CategorySkillInterface';

@Injectable({
  providedIn: 'root',
})
export class SkillDataService  {
  url = 'datas/skills.json';
  urlApiSkill = 'http://127.0.0.1:8000/api/skills'
  urlApiCategorySkill = 'http://127.0.0.1:8000/api/categories'

  private skillsSignal = signal<SkillModel[]>([]);
  private http = inject(HttpClient);

  getSkills():Observable<SkillModel[]> {
    return this.http.get<SkillModel[]>(this.url).pipe(
      tap( skills => this.skillsSignal.set(skills))
    );
  }

  getApiSkills():Observable<any>{
    return this.http.get<any>(this.urlApiSkill).pipe(
      tap( skills => this.skillsSignal.set(skills))
    );
  }
  
  getApiCategorySkills():Observable<CategorySkillInterface[]>{
    return this.http.get<CategorySkillInterface[]>(this.urlApiCategorySkill).pipe(
      tap()
    );
  }

  deleteApiSkills(id: number): Observable<any>{
    return this.http.delete<any>(this.urlApiSkill + "/" + id).pipe(
      tap( skills => console.log(skills))
    );
  }
}
