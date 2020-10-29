import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  currentLang = 'en';

  @Inject(DOCUMENT) private document: Document

  constructor(
    public translate: TranslateService
  ) {
  }
  setLang(lang: any) {
    if (lang === 'ar') {
      this.setDynamicStyle('./assets/css/Style-ar.css');
      this.setDynamicStyle('./assets/plugins/bootstrap-rtl/css/bootstrap-rtl.min.css');
    }
    else {
      window.location.reload();
    }
    this.currentLang = lang;
    this.translate.use(lang);
  }

  setDynamicStyle(cssURL: string) {
    const head = document.getElementsByTagName('head')[0];
    const style = document.createElement('link');
    style.id = 'css-styling';
    style.rel = 'stylesheet';
    style.href = `${cssURL}`;
    head.appendChild(style);
  }


}
