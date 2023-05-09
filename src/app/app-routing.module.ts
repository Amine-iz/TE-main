import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TEISComponent } from './teis/teis.component';

const routes: Routes = [
  {path:'import/TEIS',component:TEISComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
