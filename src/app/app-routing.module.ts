import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { MernStackComponent } from './courses-view/mern-stack/mern-stack.component';

const routes: Routes = [

  {path:'',component:DefaultLayoutComponent, },
  {path:"courses", loadChildren:()=>import("./courses-view/courses-view.module").then(m=>m.CoursesViewModule)},
  {path:"me",component:MernStackComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
