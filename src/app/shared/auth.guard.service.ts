import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginState } from '../login/login.state';
import { gooritaLog, safelyParseJSON } from './shared.util';
import { LOGGEDUSER_KEY, USERACCESS_KEY } from './shared.constant';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {

    constructor(public loginState: LoginState, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot) {
      gooritaLog('GuardLoginState: ', localStorage);
      const loggedUser = safelyParseJSON(localStorage.getItem(LOGGEDUSER_KEY));
      const userAccess = safelyParseJSON(localStorage.getItem(USERACCESS_KEY));
      gooritaLog('user?', loggedUser, userAccess);
      if (loggedUser && userAccess) {
        const stateSnapshot = this.loginState.snapshot;
        if (!(stateSnapshot.loggedUser || stateSnapshot.userAccess)) {
          this.loginState.setUserAccess(userAccess);
          this.loginState.setLoggedUser(loggedUser);
        }
        return true;
      }
      alert('AUTHGUARD: Please login first.');
      this.router.navigate(['gitlab/login']);
      return false;
    }
}
