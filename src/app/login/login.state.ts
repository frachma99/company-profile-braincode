import {DataAction, Debounce, Payload, StateRepository, } from '@ngxs-labs/data/decorators';
import {State} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {NgxsImmutableDataRepository} from '@ngxs-labs/data/repositories';
import {Immutable} from '@ngxs-labs/data/typings';
import {LoginStateModelGoorita, LoginStatus, SubmittedLoginGoorita} from './login.model';
import {LoginService} from './login.service';
import {userTransformer} from './login.util';
import {ERR_LOGIN} from './login.constant';
import {Router} from '@angular/router';
import { ConsoleHelper } from '../shared/shared.helpers';

@StateRepository()
@State<LoginStateModelGoorita>({
    name: 'login',
    defaults: new LoginStateModelGoorita()
})
@Injectable()
export class LoginState extends NgxsImmutableDataRepository<LoginStateModelGoorita> {

    constructor(private readonly loginService: LoginService, public router: Router) {
        super();
    }

    @DataAction()
    public setSubmittedLogin(@Payload('submittedLogin')  submittedLogin: SubmittedLoginGoorita): void {
      console.log('NGXSDATA: Updating Daily State:', submittedLogin);
      this.ctx.setState(
          (state: Immutable<LoginStateModelGoorita>): Immutable<LoginStateModelGoorita> => ({
             ...state,
             submittedLogin: submittedLogin
          })
      );

      // ==>> Login By Pass <<=============================================|| //
      // this.setLoginStatus('signing-in');
      // localStorage.setItem('userAccess', "KMZWAY87AA");
      // localStorage.setItem('loggedUser', "Aditira");
      // this.setLoginStatus('signed-in');
      // this.router.navigate(['/gitlab/project']);

      // ==>> Login Service <<=============================================|| //

      this.loginService.login({
        username: submittedLogin.username,
        password: submittedLogin.password
      }).subscribe(x => {
        if (JSON.stringify(x["status"]) == ERR_LOGIN) {
          alert('Wrong Password/email');
          this.setLoginStatus('signed-out');
        }
        else {
              ConsoleHelper.log("", JSON.stringify(x["data"]))
              localStorage.setItem('userAccess', JSON.stringify(x["data"]));
              localStorage.setItem('loggedUser', JSON.stringify(x["data"]));
              this.setLoginStatus('signed-in');
              this.router.navigate(['/gitlab/project']);
          }
      },
        error => {
        alert('Network error');
        this.setLoginStatus('signed-out');
        });
      // ================================================================================ //
    }

    @DataAction()
    public setLoggedUser(@Payload('setLoggedUser') loggedUser: any): void {
      this.ctx.setState(
        (state: Immutable<LoginStateModelGoorita>): Immutable<LoginStateModelGoorita> => ({
          ...state,
          loggedUser: loggedUser
        })
      );
    }

    @DataAction()
    public setUserAccess(@Payload('setUserAccess') data: any): void {
      this.ctx.setState(
        (state: Immutable<LoginStateModelGoorita>): Immutable<LoginStateModelGoorita> => ({
          ...state,
          userAccess: data
        })
      );
    }

    // @Debounce(1000)
    @DataAction()
    public setDebounceInputUsername(@Payload('setDebounceInputUsername') inputUsername: string): void {
        this.ctx.setState(
            (state: Immutable<LoginStateModelGoorita>): Immutable<LoginStateModelGoorita> => ({
                ...state,
                inputUsername: inputUsername
            })
        );
    }

  // @Debounce(1000)
  @DataAction()
  public setDebounceInputPassword(@Payload('setDebounceInputPassword') inputPassword: string): void {
    this.ctx.setState(
      (state: Immutable<LoginStateModelGoorita>): Immutable<LoginStateModelGoorita> => ({
        ...state,
        inputPassword: inputPassword
      })
    );
  }

  @DataAction()
  public setLoginStatus(@Payload('setLoginStatus') status: LoginStatus): void {
    this.ctx.setState(
      (state: Immutable<LoginStateModelGoorita>): Immutable<LoginStateModelGoorita> => ({
        ...state,
        loginStatus: status
      })
    );
  }
}
