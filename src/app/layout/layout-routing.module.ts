import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultSidebarComponent } from './default-sidebar/default-sidebar.component';

const routes: Routes = [
  {
    path:'home',component:DefaultSidebarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
