import { Injectable, signal } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { MyTokenInterface } from '../../Interface/MyTokenInterface';
import moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  isAdmin = signal<boolean>(false);
  isExpired = signal<boolean>(false);

  private userKey = 'USER_KEY';
  private expiredKey = 'USER_EXPIRED';

  public getAuthenticateToken(): string {
    const token = window.sessionStorage.getItem(this.userKey);
    let jsonToken = null;
    if (token) {
      jsonToken = JSON.parse(token);
    }

    return 'Bearer ' + jsonToken['token'];
  }

  /**
   * decode the string token
   * @param token : jwt to decode
   * @returns  : MyTokenInterface
   */
  private decode(token: string): MyTokenInterface {
    const decoded = jwtDecode<MyTokenInterface>(token);
    return decoded;
  }

  private getExpiration(): number {
    const expired = window.sessionStorage.getItem(this.expiredKey);
    if (expired) {
      return Number(expired);
    }
    return 0;
  }

  private hasExpired(): boolean {
    const expired = this.getExpiration();
    return moment().isBefore(expired);
  }

  public setIsExpired() {
    this.isExpired.set(this.hasExpired());
  }

  public setIsAdmin() {
    this.isAdmin.set(this.isAdminToken());
  }

  private isAdminToken(): boolean {
    const token = window.sessionStorage.getItem(this.userKey);
    if (token) {
      const decoded = this.decode(token);
      if (decoded && decoded.roles.includes('ROLE_ADMIN')) {
        return true;
      }
    }
    return false;
  }

  /**
   * set in sessionStorage this.userKey , the item (jwt normally)
   * @param item : jwt
   */
  public setAuth(item: string) {
    window.sessionStorage.removeItem(this.userKey);
    window.sessionStorage.removeItem(this.expiredKey);
    window.sessionStorage.setItem(this.userKey, item);

    const token = window.sessionStorage.getItem(this.userKey);
    if (token) {
      const decoded = this.decode(token);
      if (decoded) {
        window.sessionStorage.setItem(this.expiredKey, decoded.exp.toString());
      }
    }
  }

  public getUserName(): string {
    const token = window.sessionStorage.getItem(this.userKey);
    if (token) {
      const decoded = this.decode(token);
      if (decoded && decoded.username) {
        return decoded.username;
      }
    }
    return '';
  }
}
