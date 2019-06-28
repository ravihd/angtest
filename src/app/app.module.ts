import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LogoutCompComponent } from './logout-comp/logout-comp.component';
import { LoginCompComponent} from './login-comp/login-comp.component'
import {MyserviceService} from './myservice.service'


const appRoutes: Routes = [
  { path: 'logout', component: LogoutCompComponent },
  { path: 'login', component: LoginCompComponent }
]

@NgModule({
  declarations: [
    AppComponent,
   LogoutCompComponent,
  LoginCompComponent  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot( appRoutes)

  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
