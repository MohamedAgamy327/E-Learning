import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent {

  currentLang = 'en';

  constructor(
    public translate: TranslateService
  ) {
  }

  setLang(lang: any) {
    this.currentLang = lang;
    this.translate.use(lang);
  }

}
