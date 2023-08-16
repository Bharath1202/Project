import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Account } from '../../model/account';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../service/account.service';
import { BankService } from '../../service/bank.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {
  public citizenType = true;
  public account: Account = new Account();
  public dateOfBirth: NgbDateStruct;
  public today;
  public validCaptcha;
  public id;
  public genderList = ['Male', 'Female', 'Others']
  public martialStatus = ['Married', 'Singled', 'Divorced'];
  public citizenShip = ['Indian', 'Others'];
  public BankList = [];
  constructor(private bankService: BankService, private route: Router, private toastr: ToastrService, private activateRoute: ActivatedRoute, private accountService: AccountService) {
    this.activateRoute.queryParams.subscribe(r => {
      this.id = r['id']
      if (this.id) {
        this.getSingleAccount();
      }
    })
  }

  ngOnInit(): void {
    this.getAllBank();
    this.captcha();
    let date = new Date;
    this.today = { day: date.getDate(), month: date.getMonth() + 1, year: date.getFullYear() }

  }
  getAllBank() {
    this.bankService.getAllBank().subscribe((res: any) => {
      this.BankList = res?.result;
    }, (error) => {
      console.log(error);
    })
  }
  getSingleAccount() {
    this.accountService.getSingleAccount(this.id).subscribe((res: any) => {
      this.account = res?.result[0]
      let date = new Date(this.account.dateOfBirth)
      this.dateOfBirth = { day: date.getDate(), month: date.getMonth(), year: date.getFullYear() }
    }, (error) => {
      console.log(error);
    })
  }
  change() {
    this.BankList.forEach(res => {
      if (res._id == this.account.bankName) {
        let bankName = res?.bankName;
        let bankdata = bankName.slice(0, 3).toUpperCase();
        let bankIfsc = Math.random().toString(9).substring(2, 9);
        this.account.ifscCode = bankdata + bankIfsc;
        let accNo = Math.random().toString(9).substring(2, 17);
        this.account.accountNumber = Number(accNo);
      }
    })

  }
  changeCitizenType() {
    if (this.account.citizenShip == 'Others') {
      this.citizenType = false;
    } else {
      this.citizenType = true;
    }
  }
  captcha() {
    const fonts = ["cursive", "sans-serif", "serif", "monospace"]
    this.validCaptcha = Math.random().toString(36).substring(2, 8);
    let h = this.validCaptcha.split("").map((c) => {
      const r = -20 + Math.trunc(Math.random() * 30)
      const f = Math.trunc(Math.random() * fonts.length)
      return `<span style=transform:rotate(${r}deg);letter-spacing:1rem;font-family:${fonts[f]}>${c}</span>`
    }).join("")
    document.getElementById("preview").innerHTML = h;
  }
  text() {

  }
  submitAccount() {
    if (this.dateOfBirth) {
      let date = new Date(this.dateOfBirth.year, this.dateOfBirth.month - 1, this.dateOfBirth.day);
      this.account.dateOfBirth = date;
      let age = Number(this.account.age)
      this.account.age = age;
      console.log(this.account);
      this.account.userImage = environment.imageUrl;
      if (this.validCaptcha == this.account.captcha) {
        this.accountService.saveCustomerAccount(this.account).subscribe((res: any) => {
          this.toastr.success('Save Successfully', '', { progressBar: true });
          this.route.navigateByUrl['/home/view/customers']
        })
      } else {
        this.toastr.warning('Please enter valid Captcha', '', { progressBar: true });
      }
    }

  }

}
