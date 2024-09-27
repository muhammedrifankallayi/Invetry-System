import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesViewRoutingModule } from './courses-view-routing.module';
import { MernStackComponent } from './mern-stack/mern-stack.component';
import { MeanStackComponent } from './mean-stack/mean-stack.component';


@NgModule({
  declarations: [
    MernStackComponent,
    MeanStackComponent
  ],
  imports: [
    CommonModule,
    CoursesViewRoutingModule
  ]
})
export class CoursesViewModule { }
