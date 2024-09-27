import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyFormPopupComponent } from './apply-form-popup/apply-form-popup.component';
import { MeterialModule } from '../meterial/meterial.module';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    ApplyFormPopupComponent
  ],
  imports: [
    CommonModule,
    MeterialModule,
  ]
})
export class PopupsModule { }
