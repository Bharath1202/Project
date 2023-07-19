import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { CustomerService } from '../../service/customer.service';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private customerService:CustomerService,private toastr:ToastrService){}
  ngOnInit(): void {
    this.getCustomerAccount();
  }
  exportCsv(){}
  filterUpdate(event){}
  getCustomerAccount(){
    this.customerService.getAllCustomerAcc().subscribe((res:any)=>{
      this.customerTable = res?.result
    },(error)=>{
      console.log(error);
    })
  }
  updateStatus(data,row){
    console.log(row);
    let details = {
      _id:row?._id,
      status:data
    }
    this.customerService.updateStatus(details).subscribe((res:any)=>{
      console.log('rrr',res);

      this.toastr.success(res?.result,'',{
        progressBar:true
      })
      this.getCustomerAccount();
    },(error)=>{
      console.log(error);
    })
  }
}
