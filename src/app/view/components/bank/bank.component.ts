import { Component } from '@angular/core';
import { Bank } from '../../model/bank';
import { BankService } from '../../service/bank.service';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent {
public bank:Bank = new Bank();
public BankTable = [];
public ColumnMode = ColumnMode;
public SelectionType = SelectionType;
public basicSelectedOption = 10;
constructor(private bankService:BankService){}
submitAccount(){
  
}
saveBank(){
  this.bankService.saveBank(this.bank).subscribe((res:any)=>{
    console.log(res)
  },(error)=>{
    console.log(error)
  })
}
}
