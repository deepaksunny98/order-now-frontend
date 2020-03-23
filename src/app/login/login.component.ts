import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  otp_screen = false;
  error = false;
  constructor(private fb: FormBuilder, private service: LoginService, private router: Router) { }

  loginForm = this.fb.group({
    mobileNumber: ['', [Validators.required ]]
  });
  otpForm = this.fb.group({
    otp: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4) ]]
  });

  loginData: any;
  ngOnInit() {
  }

  login(number) {
    this.loginData = {
      Message: Math.floor(1000 + Math.random() * 9000).toString(),
      PhoneNumber:  number.mobileNumber
    };
    this.service.sendOtp(this.loginData).then(res => {
      if (res) {
        this.otp_screen = true;
      } else {
        this.error = true;
      }
    });
  }

  validateOtp(res) {
    if (+res.otp === +this.loginData.Message) {
      this.router.navigateByUrl('home');
    } else {
      this.error = true;
    }
  }
}
