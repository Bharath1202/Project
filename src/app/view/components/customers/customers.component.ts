import { AfterContentInit, Component, Input } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements AfterContentInit {
  public ColumnMode = ColumnMode;
  public SelectionType = SelectionType;
  public basicSelectedOption = 10;
  @Input() state:any
  public customerTable;
  constructor(){}
  ngAfterContentInit(): void {
    // console.log('kkkkkkkk',this.state);

  }
  exportCsv(){}
  filterUpdate(event){}
}
