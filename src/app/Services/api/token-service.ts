import { Injectable, signal } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

interface MyToken {
  roles: string[];
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  isAdmin = signal<boolean>(false);

  public getAuthenticateToken(): string {
    const token = window.sessionStorage.getItem('USER_KEY');
    let jsonToken = null;
    if (token) {
      jsonToken = JSON.parse(token);
    }

    return 'Bearer ' + jsonToken['token'];
  }

  private decode(token: string): MyToken | null {
    if (token) {
      console.log(jwtDecode(token));
      const decoded = jwtDecode<MyToken>(token);
      return decoded;
    }
    return null;
  }

  public setIsAdmin() {
    this.isAdmin.set(this.isAdminToken());
  }

  public isAdminToken(): boolean {
    const token = window.sessionStorage.getItem('USER_KEY');
    if (token) {
      const decoded = this.decode(token);
      if (decoded && decoded.roles.includes('ROLE_ADMIN')) {
        return true;
      }
    }
    return false;
  }

  /**
   * set in sessionStorage 'USER_KEY' , the item (jwt normally)
   * @param item : jwt
   */
  public setAuth(item: string) {
    window.sessionStorage.removeItem('USER_KEY');
    window.sessionStorage.setItem('USER_KEY', item);    
  }

  public getUserName() : string
  {
    const token = window.sessionStorage.getItem('USER_KEY');
    if (token) {
      const decoded = this.decode(token);
      if (decoded && decoded.username) {
        return decoded.username;
      }
    }
    return '';
  }
}
