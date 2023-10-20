import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authservice: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  if (authservice.isloggedinuser()) {
    return true;
  }
  router.navigate(['/login'], { replaceUrl: true });

  return false;
};
