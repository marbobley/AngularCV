import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticateApiService } from '../Services/api/authenticate-api-service';

export const AdminGuard: CanActivateFn = () => {
  const auth = inject(AuthenticateApiService);
  const router = inject(Router);
  
  if(!auth.isConnected())
  {
    router.navigateByUrl('/login');
    return false;
  }

  return true;
};
