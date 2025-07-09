import { Component, inject, signal } from '@angular/core';
import { UserInterface } from '../Interface/UserInterface';
import { AuthenticateApiService } from '../Services/api/authenticate-api-service';

@Component({
  selector: 'app-login-api',
  imports: [],
  templateUrl: './login-api.html',
  styleUrl: './login-api.css',
})
export class LoginApi {
  private authenticateService = inject(AuthenticateApiService);
  
  jwToken = signal<string>("");

  login() {
    this.authenticate("user@skill.com","password");
  }
  
  
    authenticate(username: string, password: string) {
  
      const user: UserInterface = { 
        username: username,
        password: password
      }

      let test = '';
  
      this.authenticateService.postLoginCheck(user).subscribe(res => 
      {
        //this.jwToken.set(res);
        console.log(res);
        test= res;
        console.log(test.token);
      });
    }
}
