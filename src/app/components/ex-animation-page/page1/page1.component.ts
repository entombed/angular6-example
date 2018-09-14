import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
  animations: [
    trigger('animaDiv', [
      state('start', 
      style({
        backgroundColor: 'blue',
        width: '150px',
        height: '150px',
        color: '#fff'
      })),
      state('end', style({
        backgroundColor: 'red',
        width: '300px',
        height: '300px',
        color: 'greenyellow'
      })),
      transition('start => end', animate(1500)),
      transition('end => start', animate('800ms 0.5s ease-out'))
    ])
  ]
})
export class Page1Component implements OnInit {

  constructor() { }
  animaState = 'start'
  ngOnInit() {

  }
  changeAnimaState() {
    this.animaState = this.animaState == 'start' ? 'end' : 'start';
  }
}
