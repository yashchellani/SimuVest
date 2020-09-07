import { Component } from '@angular/core';

import {AuthService} from './auth.service';
import {Router} from "@angular/router"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hackathon-app';

  constructor(public router:Router, private auth:AuthService){}

  logout(){
    this.auth.logout()
    this.router.navigateByUrl("/Login")
  }
}
