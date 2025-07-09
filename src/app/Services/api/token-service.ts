import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public getAuthenticateToken(): string {
    const token = window.sessionStorage.getItem('USER_KEY');
    let jsonToken = null;
    if (token) {
      jsonToken = JSON.parse(token);
      console.log(console.log());
    }

    return 'Bearer ' + jsonToken['token'];
  }
}
