import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { PendingAccountComponent } from './components/pending-account/pending-account.component';
import { BankComponent } from './components/bank/bank.component';

const routes: Routes = [
  {path:'customers',component:CustomersComponent},
  {path:'createCustomer',component:CustomerCreateComponent},
  {path:'pendingAccount',component:PendingAccountComponent},
  {path:'bank',component:BankComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
