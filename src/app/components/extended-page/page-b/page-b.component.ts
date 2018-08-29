import { Component, OnInit } from '@angular/core';
import { PageBaseComponent } from '../page-base/page-base.component';


@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.css']
})
export class PageBComponent extends PageBaseComponent implements OnInit {

  // public msgTxt = 'PAGE B';

  constructor() {
    super();
    // this.msgTxt = 'QQQQQQQQQQQQQQQQQ';
   }

  ngOnInit() {
    // this.msgTxt = 'QQQQQQQQQQQQQQQQQ';
  }

}
