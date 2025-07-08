import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { SkillModel } from '../../Classes/skill-model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillDataService  {
  url = 'datas/skills.json';
  urlApi = 'http://127.0.0.1:8000/api/skills'

  private skillsSignal = signal<SkillModel[]>([]);
  private http = inject(HttpClient);

  getSkills():Observable<SkillModel[]> {
    return this.http.get<SkillModel[]>(this.url).pipe(
      tap( skills => this.skillsSignal.set(skills))
    );
  }

  getApiSkills():Observable<any>{
    return this.http.get<any>(this.urlApi).pipe(
      tap( skills => this.skillsSignal.set(skills))
    );
  }

  deleteApiSkills(id: number): Observable<any>{
    return this.http.delete<any>(this.urlApi + "/" + id).pipe(
      tap( skills => console.log(skills))
    );
  }
}
