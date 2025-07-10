import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

interface MyToken {
  roles: string[];
}

@Injectable({
  providedIn: 'root',
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

  private decode(token: string): MyToken | null {
    //const token = window.sessionStorage.getItem('USER_KEY');
    if (token) {
      const decoded = jwtDecode<MyToken>(token);
      return decoded;
    }
    return null;
  }

  public isAdminToken(): boolean {
    const token = window.sessionStorage.getItem('USER_KEY');
    if (token) {
      const decoded = this.decode(token);
      if (decoded && decoded.roles.includes('ROLE_ADMIN')) {
        console.log('IsAdmin');
        return true;
      }
    }

        console.log('isnotadmin');
    return false;
  }
}
