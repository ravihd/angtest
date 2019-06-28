import { Injectable } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Observable , of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  
  value: any;

  constructor() { }

  setValue(updtae_value)
  {
  this.value=updtae_value
  console.log("form service ", this.value)
  }

  getValue()
  {
    return this.value
  }

 
}
