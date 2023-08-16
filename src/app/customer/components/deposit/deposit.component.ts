import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {
  public id;
  public bankDetail;
  constructor(private customerService: CustomerService) { }
  ngOnInit(): void {
    let getCustomerId = JSON.parse(localStorage.getItem('userDetail'));
    getCustomerId.forEach(res => {
      this.id = res._id;
    })
    if (this.id.length > 0) {
      this.customerService.getCustomerById(this.id).subscribe((res: any) => {
        this.bankDetail = res?.result[0]
        console.log(this.bankDetail);
      }, (error) => {
        console.log(error);
      })
    }
  }
}
