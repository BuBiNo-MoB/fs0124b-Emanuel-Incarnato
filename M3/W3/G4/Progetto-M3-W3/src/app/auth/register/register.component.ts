import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { ILoginData } from '../../modules/i-login-data';
import { IUser } from '../../modules/i-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerData:Partial<IUser> = {}

  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}

  signUp(){
    this.authSvc.register(this.registerData)
    .subscribe(data => {

      this.router.navigate(['dashboard'])

    })
  }

}
