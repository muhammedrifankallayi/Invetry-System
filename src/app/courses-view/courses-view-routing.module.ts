import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MernStackComponent } from './mern-stack/mern-stack.component';
import { MeanStackComponent } from './mean-stack/mean-stack.component';

const routes: Routes = [
  {
    path:"mern-stack",
    component:MernStackComponent
  },
  {
    path:"mean-stack",
    component:MeanStackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesViewRoutingModule { }
