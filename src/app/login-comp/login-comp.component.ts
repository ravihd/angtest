import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { MyserviceService } from '../myservice.service';
//import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.scss']
})
export class LoginCompComponent implements OnInit {


  constructor(private router: Router, private service: MyserviceService) {}
  
  ngOnInit() {
  }

  gotoHome(data)
  {
    console.log(data)
    console.log("User name :  ", data.emailid,"password : ", data.password)
    if (data.emailid=="ravi@girmiti.com" && data.password=="girmiti01") {
      this.service.setValue(data.emailid)
      this.router.navigateByUrl("logout")
      console.log("Great")
    }else{
      alert("invalid credentials ")
    }
  
  }
 

}
