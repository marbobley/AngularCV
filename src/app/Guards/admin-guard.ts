import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticateApiService } from '../Services/api/authenticate-api-service';
import { TokenService } from '../Services/api/token-service';

export const AdminGuard: CanActivateFn = () => {
  const auth = inject(AuthenticateApiService);
  const token = inject(TokenService);
  const router = inject(Router);
  
  if(!auth.isConnected() || !token.isAdminToken())
  {
    router.navigateByUrl('/login');
    return false;
  }

  return true;
};
