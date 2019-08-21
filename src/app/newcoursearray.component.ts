import { Component } from '@angular/core';
import { FormArray, AbstractControl,FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'newcoursearray',
  templateUrl: './newcoursearray.component.html'
})

export class newcoursearray {

  form =new FormGroup ({
    topics:new FormArray([])
  });
  
  addTopic( topic:HTMLInputElement) {
     (this.form.get('topics')as FormArray).push( new FormControl(topic.value)) ; 
  }

  removeTopic (topic:FormControl)
  {
    let index= this.topics.controls.indexOf(topic)
    this.topics.removeAt(index);
  }

  get topics() 
{
  return this.form.get('topics') as FormArray;
}

}