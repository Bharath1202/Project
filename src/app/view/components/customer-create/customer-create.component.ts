import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Account } from '../../model/account';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {
  public citizenType = true;
  public account = new Account;
  public dateOfBirth: NgbDateStruct;
  public today;
  public validCaptcha;
  public nn;
  public n :number=0;
  public martialStatus = ['Married','Singled','Divorced'];
  public citizenShip = ['Indian','Others'];
  constructor(private toastr:ToastrService){}
  ngOnInit(): void {
    let date = new Date;
    this.today = { day: date.getDate(), month: date.getMonth() + 1, year: date.getFullYear() }
    this.captcha();
  }
  changeCitizenType(){
    if (this.account.citizenShip == 'Others'){
      this.citizenType = false;
    }else{
      this.citizenType = true;
    }
  }
  captcha(){
    const fonts = ["cursive","sans-serif","serif","monospace"]
    this.validCaptcha = Math.random().toString(36).substring(2, 8);
    let h= this.validCaptcha.split("").map((c)=>{
      const r = -20 + Math.trunc(Math.random()*30)
      const f = Math.trunc(Math.random()*fonts.length)
      return `<span style=transform:rotate(${r}deg);letter-spacing:1rem;font-family:${fonts[f]}>${c}</span>`
    }).join("")
    document.getElementById("preview").innerHTML = h;
  }
  text(){
   
  }
  submitAccount(){
    console.log(this.validCaptcha,this.account.captcha);
    
    if (this.validCaptcha == this.account.captcha){
      this.toastr.success('Login Successfully', '', {progressBar: true});
    
    }
  }
}
