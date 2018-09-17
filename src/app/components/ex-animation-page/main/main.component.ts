import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  styleParams = {
    'background-color': 'blue',
    'color': 'red',
    'font-size': '30px'
  };

  ngOnInit() {
  }

}
