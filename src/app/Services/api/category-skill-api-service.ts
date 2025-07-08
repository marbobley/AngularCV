import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CategorySkillInterface } from '../../Interface/CategorySkillInterface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategorySkillApiService {
  private http = inject(HttpClient);
  urlApiCategorySkill = 'http://127.0.0.1:8000/api/categories';

  getCategorySkills(): Observable<CategorySkillInterface[]> {
    return this.http
      .get<CategorySkillInterface[]>(this.urlApiCategorySkill)
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
