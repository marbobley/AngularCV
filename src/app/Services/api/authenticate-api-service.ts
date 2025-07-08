import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { UserInterface } from '../../Interface/UserInterface';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateApiService {
  private http = inject(HttpClient);
  urlApi = `${environment.apiURL}/login_check`;

  postLoginCheck(user: UserInterface): Observable<UserInterface> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );

    return this.http.post<UserInterface>(this.urlApi, user, {headers: headers}).pipe(tap());
  }
}
