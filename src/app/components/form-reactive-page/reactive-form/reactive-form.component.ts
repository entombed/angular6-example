import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit, OnChanges {

  countrys: any[];
  answers: any[];
  userForm: FormGroup;
  checked: boolean = true;
  count: { value: number; label: string; }[];
  chk: any;

  constructor() {
  }

  ngOnChanges () {
   
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

    this.count = [
      {
        value: 1,
        label: "Один"
      },
      {
        value: 2,
        label: "Два"
      },
      {
        value: 3,
        label: "Три"
      }
    ];

    this.chk = [this.count[0]];

    this.userForm = new FormGroup({
      userLogin: new FormControl('!!!!!!!!!!!!!!!!!'),
      userPassword: new FormControl(''),
      userCountry: new FormControl('by'),
      userAnswer: new FormControl('n'),
      userCheckRange: new FormControl(false),
      userRange: new FormControl({value:10, disabled: true}),
      userText: new FormControl(''),
      userCount: new FormControl([[this.count[0]]])
    });

  }

  submitUserForm() {
    console.dir(this.userForm)
  }

  change(event) {
    if (this.userForm.get('userCheckRange').value) {
      this.userForm.get('userRange').enable();
    } else {
      this.userForm.get('userRange').disable();
    }
  }

  changeCount(event) {
    console.dir(event)
  }

}
