import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent {

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
