import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { RouterOutlet } from '@angular/router';
//import { slideInAnimation } from './animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    //slideInAnimation
  ]
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {}

  title = 'PPE-SPA';
  jwtHelper = new JwtHelperService();

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }

  prepareRoute(outlet: RouterOutlet) {
// tslint:disable-next-line: no-string-literal
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }



}

