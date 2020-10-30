import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  currentLang = 'en';
  loginForm: FormGroup;
  @Inject(DOCUMENT) private document: Document

  constructor(
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    public translate: TranslateService, private router: Router
  )
  {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
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
  
  login()
  {
    if(this.loginForm.value.email=='user@4explain.com'&&this.loginForm.value.password=='123456')
    {
      localStorage.setItem('email',this.loginForm.value.email);
      this.router.navigate(['/home']);
    }
    else
    {
      this.translate.get('ForgetPassword').subscribe(res => {
    
        this.toastrService.error("Failded",res);
  });
    // console.log(this.translate.stream("ForgetPassword"));
      //
    }
  }

  public errorHandling = (control: string, error: string) => {
    return this.loginForm.controls[control].hasError(error);
  }


}
