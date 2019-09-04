import { PasswordValidators } from './password.validator';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'change-password',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangePasswordComponent {
  form: FormGroup

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldpassword: ['',
        PasswordValidators.validOldPassword,
        Validators.required],
      newpassword: ['',
        Validators.required],
      confirmpassword: ['',
      ]

    },
      {
        validators: PasswordValidators.passwordsShouldMatch
      }

    );
  }

  get oldpassword() { return this.form.get("oldpassword"); }
  get confirmpassword() { return this.form.get("confirmPassword"); }
  get newpassword() { return this.form.get("newpassword"); }
}
