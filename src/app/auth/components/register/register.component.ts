import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { Register } from '../../model/register';
import { AuthService } from '../../service/auth.service';

// const image = 'src/assets/images/userImage.png'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent implements OnInit {
  public register: Register = new Register();
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  saveUser() {
    this.register.imageUrl = environment.imageUrl;
    this.authService.saveUser(this.register).subscribe(
      (res: any) => {
        this.toastr.success('Register Successfully', '', {progressBar: true});
        this.router.navigateByUrl('/auth/login');
      },
      (error) => {
        this.toastr.success(error.error.message, '', {progressBar: true});
      }
    );
  }
}
