import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  form: FormGroup;

  loadApplications() {
    this.applicationService.getApplicationList().subscribe(
      applicationList => {
        this.applications = applicationList;
      },
    );
  }
  
 }
