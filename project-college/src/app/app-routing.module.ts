import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path : "studentregistration",
    component: StudentregistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
