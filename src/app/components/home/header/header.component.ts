import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  theme: string;

  constructor(
    public translate: TranslateService
  ) {

  }

  ngOnInit(): void {
    if (localStorage.getItem('theme-dark')) {
      this.theme = 'dark';
    }
    else {
      this.theme = 'light';
    }
  }



}
