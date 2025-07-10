import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticateApiService } from '../Services/api/authenticate-api-service';
import { TokenService } from '../Services/api/token-service';

/**
 * Check if user is not connected or is not admin. In that case, user is redirect to login page
 * Else, user can activate and access
 * @returns true is user can access, false is user not authorized
 */
export const AdminGuard: CanActivateFn = () => {
  const auth = inject(AuthenticateApiService);
  const token = inject(TokenService);
  const router = inject(Router);
  
  if(!auth.isConnected() || !token.isAdmin() || token.isExpired() )
  {
    router.navigateByUrl('/login');
    return false;
  }

  return true;
};
