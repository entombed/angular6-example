import { Component, OnInit } from '@angular/core';
import { MessageService } from '@services/message.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  text: string;
  constructor(
    private _messageService: MessageService,
  ) { }

  ngOnInit() {
    this.text = '';
  }

  setTxt(data) {
    console.dir(data)
    this._messageService.setMessage(data);
  }
  getTxt() {
    this._messageService.getMessage();
  }
}
