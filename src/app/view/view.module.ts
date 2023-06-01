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

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerCreateComponent,
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    FormsModule,
    NgxDatatableModule,
    NgbModule,
    NgSelectModule,
    CountdownModule
  ]
})
export class ViewModule { }
