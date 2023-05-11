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
    return this.httpClient.post('http://localhost:40125/api/Account/SignIn', userCredential);
  }
  signUp(userInfo: any) {
    console.log(userInfo);
    
    return this.httpClient.post('http://localhost:40125/api/Account/SignUp', userInfo);
  }
  getToken() {
    if (localStorage.hasOwnProperty('authenticationToken'))
      return localStorage.getItem('authenticationToken');
    return null;
  }
}
