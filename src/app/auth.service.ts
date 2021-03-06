import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
              private router: Router) { }

  private _registerUrl = 'http://localhost:3000/home/register';
  private _loginUrl = 'http://localhost:3000/home/login';

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser(){
    this.router.navigate(['/login']);
    return localStorage.removeItem('token');

  }
  getToken() {
    return localStorage.getItem('token');
  }
}
