import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/view/service/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public userDetails;
  public userId;
  constructor(private customer:AccountService){}
  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('userDetail'));
    this.userId = this.userDetails.find(x=>x._id)
    if(this.userId){
      this.getCustomer();
    }

  }
  getCustomer(){
    this.customer.getSingleAccount(this.userId._id).subscribe((res:any)=>{
      console.log(res);
    },(error)=>{
      console.log(error);
    })
  };
}
