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
  // chk: any;
  minLoginCount: number = 5;
  pendingEmail: boolean = false;

  constructor() {
  }

  ngOnChanges() {

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

    // this.chk = [this.count[0]];

    this.userForm = new FormGroup({
      userAuth: new FormGroup({
        userLogin: new FormControl(' ', [Validators.email, this.checkLength.bind(this)], this.checkEmaillIsExist.bind(this)),
        userPassword: new FormControl('', [Validators.required, Validators.minLength(3)]),
      }),
      userCountry: new FormControl('by'),
      userAnswer: new FormControl('n'),
      userCheckRange: new FormControl(false),
      userRange: new FormControl({ value: 10, disabled: true }),
      userText: new FormControl(''),
      userCount: new FormControl([])
    });
  }

  submitUserForm() {
    console.dir(this.userForm)
  }

  checkerAction(event, action) {
    console.dir(event)
    console.dir(action)
    switch (action) {
      case 'checkBoxCount': {
        
        break;
      };
      case 'statusRange': {
        // if (this.userForm.get('userCheckRange').value) {
        //   this.userForm.get('userRange').enable();
        // } else {
        //   this.userForm.get('userRange').disable();
        // }
        this.userForm.get('userCheckRange').value ? this.userForm.get('userRange').enable() : this.userForm.get('userRange').disable();
        break;
      };
    };
  };

  checkLength(control: FormControl) {
    if (control.value.length < this.minLoginCount) {
      return { "lengthError": true };
    } else {
      return null;
    }
  };

  checkEmaillIsExist(control: FormControl): Promise<any> {
    console.log("START")
    this.pendingEmail = true;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'q@q.q') {
          resolve({ "emailExist": true });
        } else {
          resolve(null);
        }
        console.log("END")
        this.pendingEmail = false;
      }, 2000);
    });

  }

}
