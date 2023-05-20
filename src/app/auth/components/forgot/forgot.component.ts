import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Email, Forgot } from '../../model/forgot';
import { ForgotService } from '../../service/forgot.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {
  public id1;
  public id2;
  public id3;
  public id4;
  public showMobileForm = true;
  public userEmail: Email = new Email();
  private validateOTP;
  private otpNumber;
  public emailId;
  constructor(private router: Router, private forgotService: ForgotService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  sendToEmail() {
    if (this.showMobileForm == true) {
      this.forgotService.sendEmail(this.userEmail).subscribe((res: any) => {
        this.showMobileForm = false;
        this.toastr.success('OTP is send to your mail', '', {progressBar: true});
        this.validateOTP = res?.otp
        this.emailId = res?.email
      }, (error) => {
        console.log(error);
      this.router.navigateByUrl('/auth/forgot');
      this.toastr.success(error.error.result, '', {progressBar: true});
      })
    }
  }

  verifyOTP() {
    this.otpNumber = this.id1 + this.id2 + this.id3 + this.id4
    if (this.otpNumber == this.validateOTP) {
      this.forgotService.emailId = this.emailId
      this.router.navigateByUrl('/auth/resetPassword');
    }
    else {
      // this.toastr.error({ detail: "Error Message", summary: 'Please enter Valid OTP', duration: 2000 })
    }

  }
}
