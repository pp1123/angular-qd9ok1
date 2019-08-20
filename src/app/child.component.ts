import { Component } from '@angular/core';

@Component ({

  selector :'child',
  templateUrl:'./child.component.html'
})

export class ChildParentClass {
  
  log(x){
    console.log(x);
  }
}