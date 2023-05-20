import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ViewRoutingModule } from './view-routing.module';
import { CustomersComponent } from './components/customers/customers.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    FormsModule,
    NgxDatatableModule
  ]
})
export class ViewModule { }
