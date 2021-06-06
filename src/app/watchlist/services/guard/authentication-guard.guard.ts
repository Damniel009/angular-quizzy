import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationWatchlistGuard implements CanActivate {
  isUserAuthenticated = false;

  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const isAuth = this.userService.getIsAuthenticated();
    if (!isAuth) {
      this.router.navigate(['/login']);
    }
    return isAuth;
  }
}
