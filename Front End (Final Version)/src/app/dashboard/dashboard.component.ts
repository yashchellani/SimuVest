import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
    if (!this.auth.loggedIn){
      this.router.navigateByUrl("/Login")
    }
  }

}
