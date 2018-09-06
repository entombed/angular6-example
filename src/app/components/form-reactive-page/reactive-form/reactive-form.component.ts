import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  countrys: any[];
  answers: any[];
  userForm: FormGroup;

  // registrationForm: FormGroup;
  // firstName: FormControl;
  // lastName: FormControl;
  // email: FormControl;
  // password: FormControl;

  constructor() {
  }

  ngOnInit() {
    this.countrys = [
      {
        name: "RUSSIAN",
        value: "ru"
      },
      {
        name: "UKRAINE",
        value: "ua"
      },
      {
        name: "BELARUS",
        value: "by"
      }
    ];

    this.answers = [
      {
        value: "y",
        label: "Согласен"
      },
      {
        value: "n",
        label: "Не согласен"
      }
    ];

    this.userForm = new FormGroup({
      userLogin: new FormControl('!!!!!!!!!!!!!!!!!'),
      userPassword: new FormControl(''),
      userCountry: new FormControl('by'),
      userAnswer: new FormControl('n'),
      // userCheckRange: new FormControl(true),
      userRange: new FormControl({value:10, disabled: false}),
      userText: new FormControl(''), 
    });

    

  }

  submitUserForm() {
    console.dir(this.userForm)
  }

}
