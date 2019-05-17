import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router,
              private alertify: AlertifyService) {}
  canActivate(next: ActivatedRouteSnapshot): boolean {
// tslint:disable-next-line: no-string-literal
    const roles = next.firstChild.data['roles'] as Array<string>;
    if (roles) {
      const match = this.authService.roleMatch(roles);
      if (match) {
        return true ;
      } else {
        this.router.navigate(['members']);
        this.alertify.error('Vous ne pouvez pas acceder à cette page');
      }
    }
    if (this.authService.loggedIn()) {
      return true;
    }
    this.alertify.error('Vous ne pouvez pas acceder à ces données');
    this.router.navigate(['/home']);
    return false;
    }
}
