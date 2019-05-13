import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Observable } from 'rxjs';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() { }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.succes('Inscription terminée !');
    }, error => {
      this.alertify.error('Inscription non valide');
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
