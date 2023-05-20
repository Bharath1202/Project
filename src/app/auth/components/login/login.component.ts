import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../model/login';
import { AuthService } from '../../service/auth.service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  public loginType;
  public passwordTextType: boolean;
  public submitted = false;
  public login: Login = new Login();
  constructor(private router: Router, private authService: AuthService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.loginType = localStorage.getItem('loginType')
  }
  submit() {
    this.login.imageUrl = environment.imageUrl;
    this.authService.postlogin(this.login).subscribe((res: any) => {
      if (res?.result?.loginType === 'admin') {
        this.toastr.success('Login Successfully', '', {progressBar: true});
        this.router.navigateByUrl('/home/dashboard')
      } else if (res?.result?.loginType === 'user') {
        this.toastr.success('Login Successfully', '', {progressBar: true});
        // this.router.navigateByUrl('/home/mobiles');
      }
      else {
        this.toastr.warning('User Is not Registered', '', {progressBar: true});
      }
    }, (error) => {
      console.log(error);
      this.toastr.error( error.error.result, '', {progressBar: true});
    })
  }
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

}
