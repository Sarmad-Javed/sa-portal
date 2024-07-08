import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isSignIn = true;
  signInData = { username: '', password: '' };
  signUpData = { email: '', password: '', confirmPassword: '' };

  constructor(private router: Router) {}

  toggleForm() {
    this.isSignIn = !this.isSignIn;
  }

  onSignIn() {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (
      storedUser.email === this.signInData.username &&
      storedUser.password === this.signInData.password
    ) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }

  onSignUp() {
    if (this.signUpData.password !== this.signUpData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    localStorage.setItem('user', JSON.stringify(this.signUpData));
    this.isSignIn = true;
    alert('Sign Up successful! Please Sign In.');
  }
}
