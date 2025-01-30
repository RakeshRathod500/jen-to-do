import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.username === 'admin' && this.password === 'admin123') {
      this.router.navigate(['/todo']);
    } else {
      this.errorMessage = 'Invalid username or password!';
    }
  }
}
