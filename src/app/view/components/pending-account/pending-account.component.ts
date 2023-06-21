import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-pending-account',
  templateUrl: './pending-account.component.html',
  styleUrls: ['./pending-account.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class PendingAccountComponent implements OnInit {
  public ColumnMode = ColumnMode;
  public SelectionType = SelectionType;
  public basicSelectedOption = 10;
  public pendingAccount;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('tableRowDetails') tableRowDetails: any;
  constructor(private accountService:AccountService){}
  ngOnInit(): void {
    this.getAccount();
  }
  exportCsv(){}
  filterUpdate(event){}

  getAccount(){
    this.accountService.getAccount().subscribe((res:any)=>{
      this.pendingAccount = res?.result;
      console.log(this.pendingAccount);

    },(error)=>{
      console.log(error);
    })
  }

}
