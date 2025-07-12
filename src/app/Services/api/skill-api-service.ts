import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { SkillInterface } from '../../Interface/SkillInterface';
import { TokenService } from './token-service';

@Injectable({
  providedIn: 'root'
})
export class SkillApiService {
  private http = inject(HttpClient);
    private token = inject(TokenService);
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
  
    postSkill(
      categorySkill: SkillInterface
    ): Observable<SkillInterface> {
      const headers = new HttpHeaders().set('Authorization', this.token.getAuthenticateToken());
      return this.http
        .post<SkillInterface>(this.urlApiSkill, categorySkill, {
          headers: headers,
        })
        .pipe();
    }
  
    putSkill(
      skill: SkillInterface
    ): Observable<SkillInterface> {
      const headers = new HttpHeaders().set('Authorization', this.token.getAuthenticateToken());
      return this.http
        .put<SkillInterface>(
          this.urlApiSkill + '/' + skill.id,
          skill, {
          headers: headers,
        }
        )
        .pipe();
    }
  
    deleteSkill(id: number): Observable<SkillInterface> {
      const headers = new HttpHeaders().set('Authorization', this.token.getAuthenticateToken());
      return this.http
        .delete<SkillInterface>(this.urlApiSkill + '/' + id, {
          headers: headers,
        })
        .pipe();
    }
}
