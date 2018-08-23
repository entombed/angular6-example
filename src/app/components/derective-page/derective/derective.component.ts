import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-derective',
  templateUrl: './derective.component.html',
  styleUrls: ['./derective.component.css']
})
export class DerectiveComponent implements OnInit {
  
  public text: string;
  public headerText: string;
  public doMouseAction: string;
  public bgColor: {
    hover: string;
    default: string;
  };
  mouseActionText: {
    enter: string;
    leave: string;
  }
  constructor() { }

  ngOnInit() {
    this.headerText = "Создание своей директивы";
    this.text = "";
    this.bgColor = {
      hover: "red",
      default: "transparent"
    }
  }

  setText(event) {
    this.doMouseAction = event;
  }

  setBgColor(color) {
    this.bgColor.hover = color;
  }
}
