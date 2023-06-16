import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  public ColumnMode = ColumnMode;
  public SelectionType = SelectionType;
  public basicSelectedOption = 10;
  public customerTable;
  constructor(private customerService:CustomerService){}
  ngOnInit(): void {
    this.getCustomerAccount();
  }
  exportCsv(){}
  filterUpdate(event){}
  getCustomerAccount(){
    this.customerService.getAllCustomerAcc().subscribe((res:any)=>{
      console.log(res);
      this.customerTable = res?.result
    },(error)=>{
      console.log(error);
    })
  }
}
