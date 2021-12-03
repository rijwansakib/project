import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../services/user.service';
import {environment} from '../../environments/environment';
import {UserDataService} from "../services/user-data.service";

@Injectable({
  providedIn: 'root'
})
export class DeveloperAuthGuard implements CanActivate {

  constructor(
    private userDataService: UserDataService,
    private router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.userDataService.getLoggedInUserInfo('hasAccess userType isDeveloperAccess -_id')
      .subscribe(res => {
        const hasAccess = res.data.hasAccess;
        const userType = res.data.userType;
        const isDeveloperAccess = res.data.isDeveloperAccess;
        if (!hasAccess || userType === 0 || !isDeveloperAccess) {
          this.router.navigate([environment.userProfileUrl]);
        }
      }, error => {
        console.log(error);
      });
    return true;
  }

}
