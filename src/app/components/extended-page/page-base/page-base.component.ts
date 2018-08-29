import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-base',
  templateUrl: './page-base.component.html',
  styleUrls: ['./page-base.component.css']
})
export class PageBaseComponent implements OnInit {

  public msgTxt: string = 'BASE PAGE';

  constructor() { }

  ngOnInit() {
  }

  showMsg() {
    console.log(this.msgTxt);
  }

}
