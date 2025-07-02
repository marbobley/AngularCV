import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, signal } from '@angular/core';
import { SkillModel } from '../Classes/skill-model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillDataService  {
  url = 'datas/skills.json';

  private skillsSignal = signal<SkillModel[]>([]);

  constructor(private http: HttpClient) {}

  getSkills():Observable<SkillModel[]> {
    return this.http.get<SkillModel[]>(this.url).pipe(
      tap( skills => this.skillsSignal.set(skills))
    );
  }
}
