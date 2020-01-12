import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationComponent } from './application.component';
import { ApplicationRoleComponent } from './application.role.component';
import { ApplicationFeatureComponent } from './application.feature.component';
import { ApplicationEditionComponent } from './application.edition.component';

const routes: Routes = [
  { path: '', component: ApplicationComponent},
  { path: 'detail',  component : ApplicationComponent },
  { path: 'edition',  component : ApplicationEditionComponent },
  { path: 'feature',  component : ApplicationFeatureComponent },
  { path: 'role',  component : ApplicationRoleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule {}
