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

  constructor(private router: Router,private resetPassword:ResetService,private forgot:ForgotService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  forgotPassword() {  
    this.reset.email = this.forgot.emailId
    this.resetPassword.resetPassword(this.reset).subscribe((res:any)=>{
      this.toastr.success(res?.result, '', {progressBar: true});
      this.router.navigateByUrl('/auth/login')
    },(error)=>{
      console.log(error);
      this.router.navigateByUrl('/auth/resetPassword')
      this.toastr.success(error.error.result, '', {progressBar: true})
    })
  }
}
