import { AbstractControl, Validators, ValidationErrors } from '@angular/forms';
import { Response, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import * as resolve from 'fs';

export class ValidatorUnique {
  static shouldbeunique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject))=> {
      setTimeout(() => {
        if (control.value === "Piyush")
           resolve({ shouldbeunique: true });
        else
          reject(null);
      }, 2000);
    }
 
  }
}