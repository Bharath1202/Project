import { Component } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  public ColumnMode = ColumnMode;
  public SelectionType = SelectionType;
  public basicSelectedOption = 10;
  public customerTable;
  constructor(){}
  exportCsv(){}
  filterUpdate(event){}
}
