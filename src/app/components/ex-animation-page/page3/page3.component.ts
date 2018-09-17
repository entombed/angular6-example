import { Component, OnInit } from '@angular/core';
import {ChangeSizeAnimation} from '@animations/change-size.animation';



@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css'],
  animations: [ChangeSizeAnimation]
})
export class Page3Component implements OnInit {

  visible: boolean = true;
  size: string = "long";
  constructor() { }

  ngOnInit() {
  }

  changeSize() {
    this.size = this.size === "long" ? "short" : "long"
  }
}
