import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CategorySkillInterface } from '../../Interface/CategorySkillInterface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { TokenService } from './token-service';

@Injectable({
  providedIn: 'root',
})
export class CategorySkillApiService {
  private http = inject(HttpClient);
  private token = inject(TokenService);
  urlApiCategorySkill = `${environment.apiURL}/categories`;


  getCategorySkill(id: number): Observable<CategorySkillInterface> {
    return this.http
      .get<CategorySkillInterface>(this.urlApiCategorySkill + '/' + id)
      .pipe(tap());
  }

  getCategorySkills(): Observable<CategorySkillInterface[]> {
    return this.http
      .get<CategorySkillInterface[]>(this.urlApiCategorySkill)
      .pipe(tap());
  }

  postCategorySkill(
    categorySkill: CategorySkillInterface
  ): Observable<CategorySkillInterface> {
    const headers = new HttpHeaders().set('Authorization', this.token.getAuthenticateToken());
    return this.http
      .post<CategorySkillInterface>(this.urlApiCategorySkill, categorySkill, {
        headers: headers,
      })
      .pipe();
  }

  putCategorySkill(
    categorySkill: CategorySkillInterface
  ): Observable<CategorySkillInterface> {
    const headers = new HttpHeaders().set('Authorization', this.token.getAuthenticateToken());
    return this.http
      .put<CategorySkillInterface>(
        this.urlApiCategorySkill + '/' + categorySkill.id,
        categorySkill, {
        headers: headers,
      }
      )
      .pipe();
  }

  deleteCategorySkill(id: number): Observable<CategorySkillInterface> {
    const headers = new HttpHeaders().set('Authorization', this.token.getAuthenticateToken());
    return this.http
      .delete<CategorySkillInterface>(this.urlApiCategorySkill + '/' + id, {
        headers: headers,
      })
      .pipe();
  }
}
