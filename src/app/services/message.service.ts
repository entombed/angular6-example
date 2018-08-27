import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messageTxt: string = '';
  constructor() { }

  setMessage(data) {
    this.messageTxt = data;
  }

  getMessage(){
    console.log(this.messageTxt);
  }
}
