import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from '../../../../node_modules/jwt-decode';
import { RoleEnum, ConstEnum } from '../enums';

@Injectable({
  providedIn: 'root'
})

export class CredentialService {



  constructor(
    private router: Router
  ) {
  }

  getToken() {
    return localStorage.getItem(ConstEnum.token);
  }

  getUser() {
    const token = jwt_decode(this.getToken());
    return token;
  }

  checkTokenExpire() {
    if (Date.now() >= this.getUser().exp * 1000) {
      return false;
    } else {
      return true;
    }
  }

  isLoggedIn() {
    if (this.getToken()) {
      return true;
    } else {
      return false;
    }
  }

  isCashier() {
    const token = this.getUser();
    if (token.role === RoleEnum.Cashier) {
      return true;
    } else {
      return false;
    }
  }

  isAdmin() {
    const token = this.getUser();
    if (token.role === RoleEnum.Admin) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem(ConstEnum.token);
    this.router.navigate(['/login']);
  }

}
