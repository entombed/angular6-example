import { Component, OnInit, HostListener } from '@angular/core';
import { NavMenu } from '@share/nav-menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {

  constructor(private _router: Router) {
    _router.events.subscribe((event) => {
      // console.log(event)
      this.currentUrl = _router.url
    })
  }

  currentUrl: string;
  visible: boolean;
  navMenu: NavMenu[];
  KEY_CODE = {
    ESC: 27,
    ENTER: 13
  };

  @HostListener('window:keyup', ['$event'])
  keyUpEvent(event: KeyboardEvent) {
    if (event.keyCode === this.KEY_CODE.ESC) {
      this.visible = false;
    }
  }

  ngOnInit() {
    this.visible = false;
    this.navMenu = [
      {
        "name": "app-main",
        "link": "/"
      },
      {
        "name": "app-form",
        "link": "/form"
      },
      {
        "name": "app-car-page",
        "link": "/cars"
      },
      {
        "name": "app-derective-page",
        "link": "/derective"
      },
      {
        "name": "app-pipe-filter",
        "link": "/pipeFilter"
      },
      {
        "name": "app-page-a",
        "link": "/page-a"
      },
      {
        "name": "app-page-b",
        "link": "/page-b"
      },
    ];
  }

  hideNavMenu() {
    this.visible = false;
  }

}