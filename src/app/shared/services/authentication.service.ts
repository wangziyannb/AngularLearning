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
    return this.httpClient.post('http://20.241.153.128/api/Account/SignIn', userCredential);
  }
  signUp(userInfo: any) {
    return this.httpClient.post('http://20.241.153.128/api/Account/SignUp', userInfo);
  }
  getToken() {
    if (localStorage.hasOwnProperty('authenticationToken'))
      return localStorage.getItem('authenticationToken');
    return null;
  }
}
