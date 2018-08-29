import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-base',
  templateUrl: './page-base.component.html',
  styleUrls: ['./page-base.component.css']
})
export class PageBaseComponent {

  public msgTxt: string = 'BASE PAGE';
  public inputTxt: string

  constructor() { }

  public showMsg(data?) {
    if (data.length === 0) {
      data = this.msgTxt;
      this.inputTxt = this.msgTxt;
    } else {
      this.inputTxt = data
    }
    console.log(data);
  }

}
