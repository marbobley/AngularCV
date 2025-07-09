import { inject, Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { UserInterface } from '../../Interface/UserInterface';$

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

    return this.http.post<UserInterface>(this.urlApi, user, {headers: headers}).pipe(shareReplay());
  }

   private setSession(authResult) {
        const expiresAt = moment().add(authResult.expiresIn,'second');

        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    } 
}
