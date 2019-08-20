import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators}  from '@angular/forms';
import {UsernameValidators} from './username.validator.ts';
import {ValidatorUnique} from './shouldbeunique.validator.ts';
@Component({
  selector: 'signup-form',
  templateUrl: './sign-up.component.html',
  //styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form =new FormGroup({
    username:new FormControl("",[
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('Piyush'),
      UsernameValidators.cannotcontainspace ,
      Validators.pattern('\\-?\\d*\\.?\\d{1,2}'),
      ValidatorUnique.shouldbeunique
    ]),
    password:new FormControl()
  });

get username (){
  return this.form.get('username');
}

get password(){
 return this.form.get('password');
}

}
