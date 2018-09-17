import { Component, OnInit } from '@angular/core';
import {HideShowAnimation} from '@animations/hide-show.animaton';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
  animations: [HideShowAnimation]
})
export class Page2Component implements OnInit {

  visible: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showAlert() {
    this.visible = !this.visible;
  }
}
