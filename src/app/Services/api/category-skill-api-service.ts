import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CategorySkillInterface } from '../../Interface/CategorySkillInterface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CategorySkillApiService {
  private http = inject(HttpClient);
  urlApiCategorySkill = `${environment.apiURL}/categories`;

  private getToken(): string {
    const token = window.sessionStorage.getItem('USER_KEY');
    let jsonToken = null;
    if (token) {
      jsonToken = JSON.parse(token);
      console.log(console.log());
    }

    return 'Bearer ' + jsonToken['token'];
  }

  getCategorySkill(id: number): Observable<CategorySkillInterface> {
    let headers = new HttpHeaders().set('Authorization', this.getToken());
    headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    return this.http
      .get<CategorySkillInterface>(this.urlApiCategorySkill + '/' + id, {
        headers: headers,
      })
      .pipe(tap());
  }

  getCategorySkills(): Observable<CategorySkillInterface[]> {
    const headers = new HttpHeaders().set('Authorization', this.getToken());
    return this.http
      .get<CategorySkillInterface[]>(this.urlApiCategorySkill, {
        headers: headers,
      })
      .pipe(tap());
  }

  postCategorySkill(
    categorySkill: CategorySkillInterface
  ): Observable<CategorySkillInterface> {
    return this.http
      .post<CategorySkillInterface>(this.urlApiCategorySkill, categorySkill)
      .pipe();
  }

  putCategorySkill(
    categorySkill: CategorySkillInterface
  ): Observable<CategorySkillInterface> {
    return this.http
      .put<CategorySkillInterface>(
        this.urlApiCategorySkill + '/' + categorySkill.id,
        categorySkill
      )
      .pipe();
  }

  deleteCategorySkill(id: number): Observable<CategorySkillInterface> {
    return this.http
      .delete<CategorySkillInterface>(this.urlApiCategorySkill + '/' + id)
      .pipe();
  }
}
