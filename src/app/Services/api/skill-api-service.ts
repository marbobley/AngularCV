import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { SkillInterface } from '../../Interface/SkillInterface';

@Injectable({
  providedIn: 'root'
})
export class SkillApiService {
  private http = inject(HttpClient);
  urlApiSkill = `${environment.apiURL}/skills`;

  getSkill(id: number): Observable<SkillInterface> {
    return this.http
      .get<SkillInterface>(this.urlApiSkill + '/' + id)
      .pipe(tap());
  }

  getSkills(): Observable<SkillInterface[]> {
    return this.http
      .get<SkillInterface[]>(this.urlApiSkill)
      .pipe(tap());
  }
}
