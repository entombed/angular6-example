import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-server',
  templateUrl: './client-server.component.html',
  styleUrls: ['./client-server.component.css']
})
export class ClientServerComponent implements OnInit {
  
  cars: { id: number; name: string; color: string; }[];

  constructor() { }

  ngOnInit() {
    this.cars = [
      {
        id: 1,
        name: 'Ford',
        color: 'white'
      }
    ]
  }

}
