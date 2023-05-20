import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalComponent } from './components/vertical/vertical.component';
import { HorizontalComponent } from './components/horizontal/horizontal.component';
import { NumberValidationDirective } from './validation/number-validation.directive';

@NgModule({
  declarations: [
    VerticalComponent,
    HorizontalComponent,
    NumberValidationDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [NumberValidationDirective]
})
export class SharedModule { }
