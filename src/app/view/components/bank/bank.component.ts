import { Component, OnInit } from '@angular/core';
import { Bank } from '../../model/bank';
import { BankService } from '../../service/bank.service';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {
public bank:Bank = new Bank();
public BankTable = [];
public ColumnMode = ColumnMode;
public SelectionType = SelectionType;
public basicSelectedOption = 10;
constructor(private bankService:BankService){}
ngOnInit(): void {
  this.getAllBank();
}
submitAccount(){
  
}
getAllBank(){
  this.bankService.getAllBank().subscribe((res:any)=>{
    this.BankTable = res?.result;
  },(error)=>{
    console.log(error);
  })
}
saveBank(){
  this.bankService.saveBank(this.bank).subscribe((res:any)=>{
    this.getAllBank();
  },(error)=>{
    console.log(error)
  })
}
}
