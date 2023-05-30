import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { GameComponent } from './components/game/game.component';

const routes: Routes = [
  {path:'customers',component:CustomersComponent},
  {path:'createCustomer',component:CustomerCreateComponent},
  {path:'game',component:GameComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
