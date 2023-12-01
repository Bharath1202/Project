import { Component, OnInit } from '@angular/core';
import { Forgot } from '../../model/forgot';
import { Router } from '@angular/router';
import { ResetService } from '../../service/reset.service';
import { Reset } from '../../model/reset';
import { ForgotService } from '../../service/forgot.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  public reset: Reset = new Reset();

  constructor(private router: Router, private resetedPassword: ResetService, private forgot: ForgotService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  resetPassword() {
    if (this.reset.newPassword === this.reset.reTypePassword) {
      this.reset.email = this.forgot.emailId
      this.resetedPassword.resetPassword(this.reset).subscribe((res: any) => {
        this.toastr.success(res?.result, '', { progressBar: true });
        this.router.navigateByUrl('/auth/login')
      }, (error) => {
        console.log(error);
        this.router.navigateByUrl('/auth/resetPassword')
        this.toastr.success(error.error.result, '', { progressBar: true })
      })
    } else {
      this.toastr.warning('Password dosent match', '', { progressBar: true })
    }
  }
}
