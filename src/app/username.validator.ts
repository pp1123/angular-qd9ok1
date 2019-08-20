import  {AbstractControl,Validators} from '@angular/forms'

export class UsernameValidators
{
  static cannotcontainspace(control:AbstractControl)
  {
    if ((control.value as string).indexOf(' ')>=0 )
      return {cannotcontainspace:true};

      return null;
  }
}