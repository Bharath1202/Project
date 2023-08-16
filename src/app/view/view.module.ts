import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ViewRoutingModule } from './view-routing.module';
import { CustomersComponent } from './components/customers/customers.component';
import { FormsModule } from '@angular/forms';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { CountdownModule } from 'ngx-countdown';
import { PendingAccountComponent } from './components/pending-account/pending-account.component';
import { BankComponent } from './components/bank/bank.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerCreateComponent,
    PendingAccountComponent,
    BankComponent,
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    FormsModule,
    NgxDatatableModule,
    NgbModule,
    NgSelectModule,
    CountdownModule,
    FormsModule,
    SharedModule
  ]
})
export class ViewModule { }
