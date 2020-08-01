import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username === "augustoneto" && password === "123456") {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    } 
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return user !== null;
  }
}
