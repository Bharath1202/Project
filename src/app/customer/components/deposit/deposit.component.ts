import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Deposit, Withdraw } from '../../model/customer';
import { ToastrService } from 'ngx-toastr';
import { log } from 'console';
import { Router } from '@angular/router';
import { map, take, tap } from 'rxjs';
import { AccountService } from 'src/app/view/service/account.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {
  public id;
  public avatarImage;
  public bankId;
  public bankDetail;
  public bankName;
  public userImage;
  public listDeposit = [];
  public avatarImg;
  public uploadImage;
  public customer: Deposit = new Deposit();
  public withdraw: Withdraw = new Withdraw();
  public image = 'https://dummyimage.com/100x100/ccc/000';
  constructor(private accountService: AccountService, private route: Router, private customerService: CustomerService, private fireStorage: AngularFireStorage, private toastr: ToastrService) { }
  ngOnInit(): void {
    let getCustomerId = JSON.parse(localStorage.getItem('userDetail'));
    getCustomerId.forEach(res => {
      this.id = res._id;
    })
    this.getAllDeposit();
    this.getCustomerId();
  }
  getCustomerId() {
    if (this.id.length > 0) {
      this.customerService.getCustomerById(this.id).subscribe((res: any) => {
        this.userImage = res?.result[0].userImage;
        this.bankDetail = res?.result[0]
        this.bankDetail?.bank.forEach(r => {
          this.bankId = r.bankId;
          this.bankName = r.bankName;
        })
      }, (error) => {
        console.log(error);
      })
    }
  }

  async upload(event) {
    const file = event.target.files[0];
    if (file) {
      const path = `users/${file.name}`
      this.uploadImage = await this.fireStorage.upload(path, file);
      const res = await this.uploadImage.ref.getDownloadURL()
      this.avatarImg = res;
      let image = {
        "id": this.id,
        "image": this.avatarImg
      }
      this.customerService.uploadImage(image).pipe(take(1)).subscribe((res: any) => {
        this.getCustomerId();
      }, (error) => {
        console.log(error);
      })
    }
  }

  removeImg() {
    this.avatarImage = 'https://dummyimage.com/100x100/ccc/000';
  }
  public d;
  deposit() {
    let details = {
      customerId: this.id,
      bankId: this.bankId,
      depositAmount: this.customer.depositamount,
    }
    this.customerService.depositAmount(details).pipe(take(1)).subscribe((res: any) => {
      this.toastr.success('Deposit Successfully', '', { progressBar: true });
      this.customer = new Deposit();
      this.getAllDeposit();
    }, (error) => {
      this.toastr.error('An error occurred', '', { progressBar: true });
    })
  }
  getAllDeposit() {
    this.customerService.getAllDeposit().subscribe((res: any) => {
      this.listDeposit = res;

      this.listDeposit.forEach(r => {
        let newDate = new Date(r.date);
        let date = { day: newDate.getDate(), month: newDate.getMonth(), year: newDate.getFullYear(), hour: newDate.getHours(), minute: newDate.getMinutes(), seconds: newDate.getSeconds() }
        r.date = date;
      })
    }, (error) => {
      console.log(error);
    })
  }
  withdrawAmount() {
    let details = {
      customerId: this.id,
      bankId: this.bankId,
      withdrawAmount: Number(this.withdraw.withdrawAmount),
    }
    this.customerService.withdrawAmount(details).pipe(take(1)).subscribe((res: any) => {
      this.toastr.success('Withdraw Successfully', '', { progressBar: true });
      this.withdraw = new Withdraw();
      this.getAllDeposit();
    }, (error) => {
      console.log(error);
    })
  }
}
