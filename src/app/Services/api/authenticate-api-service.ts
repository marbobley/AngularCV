import { computed, inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserInterface } from '../../Interface/UserInterface';
import { TokenService } from './token-service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateApiService {
  private http = inject(HttpClient);
  private token = inject(TokenService);
  urlApi = `${environment.apiURL}/login_check`;
  private _currentUser = signal<UserInterface | null>(null);

  currentUser = this._currentUser.asReadonly();
  isConnected = computed(() => this.currentUser() !== null);

  reloadToken(username: string) {
    this._currentUser.set({ username: username });
  }

  login(
    username: string,
    password: string
  ): Observable<{
    user: UserInterface;
  }> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    return this.http
      .post<{
        user: UserInterface;
      }>(this.urlApi, { username, password }, { headers: headers })
      .pipe(
        tap((response) => {
          // Nous mettons à jour l'état de l'utilisateur connecté
          this._currentUser.set(response.user);
          this.token.setAuth(JSON.stringify(response));
          this.token.setIsAdmin();
        })
      );
  }

  /*

  // Méthode pour rafraîchir les tokens. Utilisée par l'intercepteur HTTP
  revokeToken(): Observable<UserInterface> {
    return this.http
      .post<UserInterface>('/api/revoke-token', {})
      .pipe(
        tap((response) => {
          this._currentUser.set(response);
          window.sessionStorage.removeItem('USER_KEY');
          window.sessionStorage.setItem('USER_KEY', JSON.stringify(response));
        })
      );
  }

  logout(): Observable<UserInterface> {
    return this.http
      .post<UserInterface>('/api/logout', {})
      .pipe(
        tap(() => {
          // Le backend devrait supprimer les cookies
          this._currentUser.set(null);
        })
      );
  }*/
}
