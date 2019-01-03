import { Component, OnInit } from '@angular/core';
import { MessageService } from '@services/message.service';

@Component({
  selector: 'app-pipe-filter',
  templateUrl: './pipe-filter.component.html',
  styleUrls: ['./pipe-filter.component.css']
})
export class PipeFilterComponent implements OnInit {

  carsArray: any[];
  filterString: string;
  constructor(
    private _messageService: MessageService,
  ) { }

  ngOnInit() {
    this.filterString = '';
    this.carsArray = [
      {"name": "BMW"},
      {"name": "qq"},
      {"name": "qw"},
      {"name": "BeeMW"},
      {"name": "BrrMW"},
      {"name": "BccMW"},
      {"name": "BMtttW"},
      {"name": "BxxxMW"},
    ]
  }

  num = 40.55;
  setTxt(data) {
    console.dir(data)
    this._messageService.setMessage(data);
  }
  getTxt() {
    this._messageService.getMessage();
  }

}
