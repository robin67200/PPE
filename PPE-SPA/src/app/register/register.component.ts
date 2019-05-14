import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Observable } from 'rxjs';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  registerForm: FormGroup;

  constructor(private authService: AuthService, private alertify: AlertifyService, private router: Router,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.cretaeRegisterForm();
  }

  cretaeRegisterForm() {
    this.registerForm = this.fb.group({
      status: ['prof'],
      dateOfBirth: [null, Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5),
        Validators.maxLength(25)]],
      confirmPassword: ['', Validators.required]
    }, {validator: this.passwordMatchValidator});
  }

  passwordMatchValidator(g: FormGroup) {
// tslint:disable-next-line: object-literal-key-quotes
    return g.get('password').value === g.get('confirmPassword').value ? null : {'mismatch' : true};
  }

  register() {
    // this.authService.register(this.model).subscribe(() => {
      // this.alertify.succes('Inscription terminée !');
    // }, error => {
      // this.alertify.error('Inscription non valide');
    // }, () => {
      // this.router.navigate(['/success']);
    // });
    console.log(this.registerForm.value);
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
