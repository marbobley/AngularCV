import { Component, inject, OnInit } from '@angular/core';
import { AuthenticateApiService } from '../../Services/api/authenticate-api-service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TokenService } from '../../Services/api/token-service';

@Component({
  selector: 'app-login-api',
  imports: [FormsModule],
  templateUrl: './login-api.html',
  styleUrl: './login-api.css',
})
export class LoginApi implements OnInit {
  private authService = inject(AuthenticateApiService);
  private router = inject(Router);
  private token = inject(TokenService);

  username = '';
  password = '';

  
  ngOnInit(): void {
    this.token.setIsAdmin();
    const isAdmin = this.token.isAdmin();

    if(isAdmin)
    {
      console.log('isConnected');
      
      this.authService.reloadToken(this.token.getUserName());
      this.router.navigateByUrl('/');
      return;
    }

  }


  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
      },
      error: (error: HttpErrorResponse) => {  
        console.error('Login failed', error);
        // Afficher un message d'erreur à l'utilisateur
      }
    });
  }
}
