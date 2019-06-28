import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-logout-comp',
  templateUrl: './logout-comp.component.html',
  styleUrls: ['./logout-comp.component.scss']
})
export class LogoutCompComponent implements OnInit {
value;
  constructor(private service: MyserviceService) {
    this.value=this.service.getValue()
    console.log(this.value)
  }
  ngOnInit() {
  }


  

}
