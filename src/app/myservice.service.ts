import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Observable , of } from 'rxjs';
const url="https://jsonplaceholder.typicode.com/users";
@Injectable({
  providedIn: 'root'
})


export class MyserviceService {
  
  value: any;
  value1 : any;
  static suffix: "/12";
 

  constructor(private http:HttpClient) {

   }
   setValue(updtae_value: any)
  {
  this.value=updtae_value
  console.log("form service ", this.value)
  }
  getValue()
  {
    return this.value
  }

  getApiDetails(){
    //console.log(this.suffix)
   return this.http.get(url);
    
  }
  setValue1(updtae_value: any)
  {
    console.log("Here>>>>>>>>>>>>>>>>>>>12121212.", this.value1)
    this.value1=updtae_value;
    
  }

  getdetails1()
  {
    console.log(this.value1)
    return this.http.get(url+"/"+this.value1)
  }
}
