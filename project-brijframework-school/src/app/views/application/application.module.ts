import { NgModule } from '@angular/core';

import { ApplicationComponent } from './application.component';
import { ApplicationRoutingModule } from './application-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ApplicationRoleComponent } from './application.role.component';
import { ApplicationFeatureComponent } from './application.feature.component';
import { ApplicationEditionComponent } from './application.edition.component';
@NgModule({
  imports: [
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    CommonModule,
    ApplicationRoutingModule
  ],
  declarations: [ ApplicationComponent , ApplicationRoleComponent, ApplicationFeatureComponent , ApplicationEditionComponent]
})
export class ApplicationModule {

}
