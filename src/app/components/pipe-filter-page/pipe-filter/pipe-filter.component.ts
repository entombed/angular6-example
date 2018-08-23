import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-filter',
  templateUrl: './pipe-filter.component.html',
  styleUrls: ['./pipe-filter.component.css']
})
export class PipeFilterComponent implements OnInit {

  carsArray: any[];
  filterString: string;
  constructor() { }

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

}
