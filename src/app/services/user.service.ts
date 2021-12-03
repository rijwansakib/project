import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {UiService} from './ui.service';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {User} from '../interfaces/user';
import {DATABASE_KEY} from '../core/utils/global-variable';
import {NgxSpinnerService} from 'ngx-spinner';

const API_USER = environment.apiBaseLink + '/api/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private token: string;
  private isUser = false;
  private userStatusListener = new Subject<boolean>();
  // Hold The Count Time..
  private tokenTimer: any;

  constructor(
    private httpClient: HttpClient,
    private uiService: UiService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
  }

  /**
   * USER REGISTRATION
   */

  userRegistration(data: User, redirectForm?: string) {
    this.httpClient.post<{ success: boolean; message: string; token: string; expiredIn: number }>
    (API_USER + 'registration', data)
      .subscribe(res => {
        if (res.success) {
          this.token = res.token;
          // Make User Auth True..
          this.spinner.hide();
          if (res.token) {
            this.onSuccessLogin(res.token, res.expiredIn, redirectForm, true);
          }

        } else {
          this.uiService.wrong(res.message);
          this.isUser = false;
          this.userStatusListener.next(false);
          this.spinner.hide();
        }
      }, () => {
        this.isUser = false;
        this.userStatusListener.next(false);
        this.spinner.hide();
      });
  }

  userLogin(data: { username: string, password: string }, redirectFrom?: string) {

    this.httpClient.put<{ success: boolean; message: string; token: string; expiredIn: number }>
    (API_USER + 'login', data)
      .subscribe(res => {
        if (res.success) {
          this.token = res.token;
          // Make User Auth True..
          if (res.token) {
            this.onSuccessLogin(res.token, res.expiredIn, redirectFrom);
          }
        } else {
          this.uiService.wrong(res.message);
          this.isUser = false;
          this.userStatusListener.next(false);
          this.spinner.hide();
        }

      }, () => {
        this.isUser = false;
        this.userStatusListener.next(false);
        this.spinner.hide();
      });
  }

  /**
   * FIREBASE LOGIN
   */

  // AuthLogin(provider, loginType: string) {
  //   return this.afAuth.signInWithPopup(provider)
  //     .then((credential) => {
  //       const user: User = {
  //         fullName: credential.user.displayName,
  //         username: credential.user.uid,
  //         password: null,
  //         phoneNo: credential.user.phoneNumber,
  //         profileImg: credential.user.phoneNumber,
  //         isPhoneVerified: false,
  //         isEmailVerified: false,
  //         email: credential.user.email,
  //         hasAccess: true,
  //         registrationType: loginType,
  //       };
  //       this.firebaseLoginWithMongo(user);
  //     }).catch((error) => {
  //       console.log(error);
  //     });
  // }

  // FacebookAuth() {
  //   return this.AuthLogin(new auth.FacebookAuthProvider(), 'facebook');
  // }
  //
  // GoogleAuth() {
  //   return this.AuthLogin(new auth.GoogleAuthProvider(), 'google');
  // }

  firebaseLoginWithMongo(credential: User) {
    this.httpClient.post<{ token: string, expiredIn: number }>(API_USER + 'firebase-login', credential)
      .subscribe(res => {
        const getToken = res.token;
        this.token = getToken;
        // Make User Auth True..
        if (getToken) {
          this.onSuccessLogin(getToken, res.expiredIn);
        }
      }, () => {
        this.isUser = false;
        this.userStatusListener.next(false);
        // console.log(error);
      });
  }

  /**
   * User Auto Login
   */
  autoUserLoggedIn() {
    const authInformation = this.getUserData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expiredDate.getTime() - now.getTime();

    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.userStatusListener.next(true);
      this.isUser = true;
      this.setSessionTimer(expiresIn / 10000);
    }
  }

  /**
   * MIDDLEWARE OF AUTH STATUS
   */
  getUserToken() {
    return this.token;
  }

  getUserStatusListener() {
    return this.userStatusListener.asObservable();
  }

  getUserStatus() {
    return this.isUser;
  }

  /**
   * User Logout
   */
  userLogOut() {
    this.token = null;
    this.isUser = false;
    this.userStatusListener.next(false);
    // Clear Token from Storage..
    this.clearUserData();
    // Clear The Token Time..
    clearTimeout(this.tokenTimer);
    // Navigate..
    this.router.navigate([environment.appBaseUrl]);
  }

  /**
   * CHECK USER PHONE
   */

  checkAndGetUserByPhone(phoneNo: string) {
    return this.httpClient.get<{ data: boolean, message: string }>(API_USER + 'check-user-by-phone/' + phoneNo);
  }

  /**
   * EDIT PASSWORD
   */
  editPassword(data: any) {
    return this.httpClient.post<{ message: string }>(API_USER + 'edit-password', data);
  }

  updatePassword(data: any) {
    return this.httpClient.post<{ success: boolean; message: string }>(API_USER + 'update-password', data);
  }

  protected saveUserData(token: string, expiredDate: Date) {
    localStorage.setItem(DATABASE_KEY.loginToken, token);
    localStorage.setItem(DATABASE_KEY.loggInSession, expiredDate.toISOString());
  }

  protected getUserData() {
    const token = localStorage.getItem(DATABASE_KEY.loginToken);
    const expirationDate = localStorage.getItem(DATABASE_KEY.loggInSession);

    if (!token && !expirationDate) {
      return;
    }
    return {
      token,
      expiredDate: new Date(expirationDate)
    };
  }

  protected clearUserData() {
    localStorage.removeItem(DATABASE_KEY.loginToken);
    localStorage.removeItem(DATABASE_KEY.loggInSession);
  }

  /**
   * ON SUCCESS LOGIN
   */

  private onSuccessLogin(token: string, expiredIn: number, redirectFrom?: string, fromRegistration?: boolean) {
    this.isUser = true;
    this.userStatusListener.next(true);

    // For Token Expired Time..
    const expiredInDuration = expiredIn;
    this.setSessionTimer(expiredInDuration);

    // Save Login Time & Expiration Time & Token to Local Storage..
    const now = new Date();
    const expirationDate = new Date(now.getTime() + expiredInDuration * 1000);
    this.saveUserData(token, expirationDate);

    // Snack bar..
    this.uiService.success('Welcome! Login Success.');
    // Spinner
    this.spinner.hide();

    // Navigate with Auth..
    if (redirectFrom) {
      this.router.navigate([redirectFrom]);
    } else {
      this.router.navigate([environment.userBaseUrl]);
    }
  }

  /**
   * AUTH SESSION
   * SAVE USER DATA
   * CLEAR USER DATA
   */

  private setSessionTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
    }, duration * 1000);
  }


}
