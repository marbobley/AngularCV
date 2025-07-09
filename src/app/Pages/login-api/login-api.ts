import { Component, inject } from '@angular/core';
import { AuthenticateApiService } from '../../Services/api/authenticate-api-service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-api',
  imports: [FormsModule],
  templateUrl: './login-api.html',
  styleUrl: './login-api.css',
})
export class LoginApi {
  private authService = inject(AuthenticateApiService);
  private router = inject(Router);

  username = '';
  password = '';


  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        console.log('Logged in successfully');
        this.router.navigateByUrl('/');
      },
      error: (error: HttpErrorResponse) => {  
        console.error('Login failed', error);
        // Afficher un message d'erreur à l'utilisateur
      }
    });
  }
}
