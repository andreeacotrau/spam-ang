import { Component, OnInit, HostListener } from '@angular/core';
import { LoginService } from 'src/app/services/login-service/login.service';
import { AuthDataStorage } from 'src/app/security/auth-data-storage';
import { Router } from '@angular/router'
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authDataStorage: AuthDataStorage,
              private service: LoginService,
              private router : Router,
              private toastr : ToastrService) { }

  ngOnInit() {
  }

  logIn(): void {
    this.service.login(this.email, this.password).subscribe(
      response => {
        let jwtToken = response.headers.get('token');
        this.authDataStorage.clearAuthData();
        this.authDataStorage.setJwtToken(jwtToken);
        this.router.navigate(['/dashboard']);
      },
      err => {
        this.toastr.error('Invalid username or password!',"",{
          "closeButton": true,
          "positionClass": "toast-bottom-right",
          "tapToDismiss": true});
      }
      );
  }

  @HostListener('document:keypress', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.logIn();
    }
  }

  goToRegister() {
    this.router.navigate(["/register"]);
  }
}
