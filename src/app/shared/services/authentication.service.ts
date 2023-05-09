import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {

  }

  login(userName: any, password: any) {
    let userCredential = {
      username: userName,
      password: password
    }
    return this.httpClient.post('http://localhost:6259/api/Account/SignIn', userCredential);
  }
  getToken() {
    if (localStorage.hasOwnProperty('authenticationToken'))
      return localStorage.getItem('authenticationToken');
    return null;
  }
}
